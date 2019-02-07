import React, {Component} from 'react';
import {connect} from 'react-redux';
import {events} from "../../actions";
import "../../css/schedule.css"
import EventModal from "../modals/Event";
import Day from "./Day"
import Week from "./Week"
import Month from "./Month"
import Info from "../modals/Info";
import moment from "moment";
import PropTypes from "prop-types";

const viewType = {day: 0, week: 1, month: 2};

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <div className={'today-button'}>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <button type="button" className="btn btn-secondary btn-sm"
                                onClick={() => this.props.changeDate(moment().startOf('day'))}>
                            Today
                        </button>
                    </div>
                </div>

                <div className={'view-buttons'}>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <button type="button" className="btn btn-secondary btn-sm"
                                onClick={() => this.props.changeView(viewType.day)}>Day
                        </button>
                        <button type="button" className="btn btn-secondary btn-sm"
                                onClick={() => this.props.changeView(viewType.week)}>Week
                        </button>
                        <button type="button" className="btn btn-secondary btn-sm"
                                onClick={() => this.props.changeView(viewType.month)}>Month
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

ControlPanel.propTypes = {
    changeDate: PropTypes.func,
    changeView: PropTypes.func,
};

class ScheduleTable extends Component {
    render() {
        let table;
        if (this.props.view === viewType.day) {
            table = <Day selectedDate={this.props.selectedDate}
                         onEventClick={this.props.onEventClick}
                         viewDay={this.props.viewDay}
                         view={this.props.view}
                         events={this.props.events}
                         onDateClick={this.props.onDateClick}
            />
        }
        if (this.props.view === viewType.week) {
            table = <Week selectedDate={this.props.selectedDate}
                          onEventClick={this.props.onEventClick}
                          viewDay={this.props.viewDay}
                          view={this.props.view}
                          events={this.props.events}
                          onDateClick={this.props.onDateClick}
            />
        }
        if (this.props.view === viewType.month) {
            table = <Month selectedDate={this.props.selectedDate}
                           onEventClick={this.props.onEventClick}
                           viewDay={this.props.viewDay}
                           view={this.props.view}
                           events={this.props.events}
                           onDateClick={this.props.onDateClick}
            />
        }

        return (
            <div className={'shedule'}>{table}</div>
        )
    }
}

ScheduleTable.propTypes = {
    view: PropTypes.number,
    selectedDate: PropTypes.object,
    events: PropTypes.arrayOf(PropTypes.object),

    onDateClick: PropTypes.func,
    onEventClick: PropTypes.func,
    viewDay: PropTypes.func,
};

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: viewType.month,
            selectedDate: this.props.selectedDate,
            clickedDate: null,
            id: null,
            calendars: this.props.calendars,
            calendarsId: [],
            emptyEvent: {
                id: null,
                title: "",
                text: "",
                startDate: moment().toISOString(),
                finishDate: moment().hour(moment().hour() + 1).toISOString(),
                repeat: 0,
                notice: false,
                notification: 0,
                calendar: this.props.calendars ? this.props.calendars[0] : undefined,
            },

            event: {},
            notificationEvent: {},
            notifications: [],
            events: [],
            isOpen: false,
            isOpenNotification: false,
            isOpenNoCalendars: false
        };
    }

    componentWillReceiveProps(props) {
        let update = false;
        let calendarsId = []
        if (props.selectedDate) {
            if (props.selectedDate !== this.state.selectedDate) {
                if (moment(props.selectedDate).month() !== moment(this.state.selectedDate).month()) {
                    update = true
                }
                this.setState({selectedDate: props.selectedDate});
            }
        }
        if (props.calendars) {
            if (props.calendars !== this.state.calendars) {
                this.setState({
                    calendars: this.props.calendars
                })
                for (let index = 0; index < props.calendars.length; index++) {
                    let calendar = props.calendars[index]
                    if (calendar.show === true) {
                        calendarsId.push(calendar.id)
                    }
                }
                update = true
            }
        }
        if (update) {
            this.setState({
                calendars: props.calendars,
                calendarsId: calendarsId
            })
            this.updateEvents(props.selectedDate, calendarsId)
        }
    }

    updateEvents(date, calendarsId) {
        this.props.loadEvents(date, calendarsId).then(response => {
            this.setState({events: this.props.events});
        });
        this.props.loadNotifications(date, calendarsId).then(response => {
            this.setState({notifications: this.props.events});
            if (this.props.events !== []) {
                let event = this.props.events[this.props.events.length - 1];
                if (event) {
                    this.setState({
                        isOpenNotification: true,
                        notificationEvent: event,
                    });
                }
            }
        });
    }

    viewDay = (e, day) => {
        this.setState({
            selectedDate: day,
            view: viewType.day
        });
        e.stopPropagation();
    };

    dismissNotification = () => {
        let event = this.state.notificationEvent;
        let events = this.state.notifications;
        events.pop();
        event.notice = false;
        this.props.updateEvent(event.id, event);

        if (events !== []) {
            let event = events[events.length - 1];
            this.setState({
                isOpenNotification: event ? true : false,
                notificationEvent: event ? event : {},
                notifications: events,
            });
        }
    };

    toggleModal = () => {
        if (this.state.isOpen === true) {
            this.setState({event: this.state.emptyEvent,});
            this.updateEvents(this.state.selectedDate, this.state.calendarsId)
        } else {
            if (this.state.calendars.length === 0) {
                this.toggleNoCalendarsModal()
                return
            }
        }
        this.setState({isOpen: !this.state.isOpen});
    };

    toggleNoCalendarsModal = () => {
        this.setState({isOpenNoCalendars: !this.state.isOpenNoCalendars});
    };

    complete = (event) => {
        if (event.id) {
            this.props.updateEvent(event.id, event).then(response => {
                this.toggleModal()
            });
        } else {
            this.props.addEvent(event).then(response => {
                this.toggleModal()
            });
        }
    };

    onDateClick = (day, hour) => {
        if (hour != null) {
            day = moment(day.setHours(hour.getHours()))
        }
        this.setState({
            event: {},
            clickedDate: day,
        });
        this.toggleModal()
    };

    onEventClick = (e, event) => {
        this.setState({
            event: event,
            clickedDate: null,
        });
        this.toggleModal();
        e.stopPropagation();
    };

    changeView = (view) => {
        this.setState({
            view: view
        })
    }

    render() {
        return (
            <div className={'tall'}>

                <ControlPanel changeView={this.changeView} changeDate={this.props.changeDate}/>

                <ScheduleTable view={this.state.view}
                               selectedDate={this.props.selectedDate}
                               events={this.props.events}
                               viewDay={this.viewDay}
                               onDateClick={this.onDateClick}
                               onEventClick={this.onEventClick}
                />

                <EventModal show={this.state.isOpen} onCancel={this.toggleModal} onOk={this.complete}
                            event={this.state.event} date={this.state.clickedDate}
                            calendars={this.state.calendars}></EventModal>

                <Info show={this.state.isOpenNotification} onOk={this.dismissNotification}
                      header={"Notification about event \"" + this.state.notificationEvent.title + "\""}>
                    Event "{this.state.notificationEvent.title}" starts
                    in {moment(this.state.notificationEvent.start_date).toLocaleString()}
                </Info>

                <Info show={this.state.isOpenNoCalendars} onOk={this.toggleNoCalendarsModal}
                      header={"Notification about calendars "}>
                    Please add at least one calendar to add new event.
                </Info>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.events,
        calendars: state.calendars,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadEvents: (date, calendars) => {
            return dispatch(events.loadEvents(date, calendars));
        },
        loadNotifications: (date, calendars) => {
            return dispatch(events.loadNotifications(date, calendars));
        },
        addEvent: (model) => {
            return dispatch(events.addEvent(model));
        },
        updateEvent: (id, model) => {
            return dispatch(events.updateEvent(id, model));
        },
    }
};

Main.propTypes = {
    selectedDate: PropTypes.object,
    events: PropTypes.arrayOf(PropTypes.object),
    calendars: PropTypes.arrayOf(PropTypes.object),

    changeDate: PropTypes.func,
    toggleModalImport: PropTypes.func,
    changeCalendars: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);