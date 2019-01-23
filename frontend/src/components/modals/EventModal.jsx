import React, {Component} from 'react';
import "../../css/form.css"
import {events} from "../../actions";
import {connect} from "react-redux";
import Modal from "./Modal"
import moment from "moment";


class EventModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text: "",
            id: this.props.id,
            start_date: new Date(),
            finish_date: new Date(),
            repeat: 0,
            isOpen: false,
            repeatOptions: [{0: 'No'}, {1: 'Day'}, {2: 'Week'}, {3: 'Month'}, {4: 'Year'}] // заменить на enum
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let hour = new Date().getHours()

        if (nextProps.date != null) {
            let date = new Date(nextProps.date)
            date = new Date(date.setHours(hour))
            date = moment(date).format();
            let value = date.replace(/\+[0-9]*\:[0-9]*/, '')
            this.setState({
                start_date: value
            })

            date = new Date(date)
            date = new Date(date.setHours(hour + 1))
            date = moment(date).format();
            value = date.replace(/\+[0-9]*\:[0-9]*/, '')
            this.setState({
                finish_date: value
            })
        }

        if (nextProps.event !== {}) {
            if (nextProps.event.start_date) {
                let date = moment(nextProps.event.start_date).format();
                let value = date.replace(/\+[0-9]*\:[0-9]*/, '')

                this.setState({
                    start_date: value
                })
            }
            if (nextProps.event.finish_date) {
                let date = moment(nextProps.event.finish_date).format();
                let value = date.replace(/\+[0-9]*\:[0-9]*/, '')

                this.setState({
                    finish_date: value
                })
            }
            this.setState({
                id: nextProps.event.id,
                title: nextProps.event.title,
                text: nextProps.event.text,
                repeat: nextProps.event.repeat,
            })
        }
    }

    onOk = () => {
        let event = {
            id: this.state.id,
            title: this.state.title,
            text: this.state.text,
            start_date: this.state.start_date,
            finish_date: this.state.finish_date,
            repeat: this.state.repeat,
        }
        this.props.onOk(event)
    };

    delete = () => {
        this.props.deleteEvent(this.state.id).then(response => {
            this.props.onCancel()
        })
    };

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    select() {
        let options = []
        options = this.state.repeatOptions.map((o) => {
            o.key = Object.keys(o)[0]
            o.value = Object.values(o)[0]
            return (
                <option className="input" key={o.key} value={o.key}>
                    {o.value}</option>
            );
        });

        return <select className="input" value={this.state.repeat}
                       onChange={(e) => {
                           this.setState({repeat: e.target.value})
                       }}>{options}</select>
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        let buttons, label;
        if (this.state.id) {
            buttons = <div className={'button-group'}>
                <button className={"btn btn-secondary"} onClick={this.props.onCancel}> CANCEL</button>
                <button className={"btn btn-danger"} onClick={this.toggleModal}> DELETE</button>
                <button className={"btn btn-secondary"} onClick={this.onOk}> OK</button>
            </div>
            label = <h1>Edit event "{this.props.event.title}"</h1>
        } else {
            buttons = <div className={'button-group'}>
                <button className={"btn btn-secondary"} onClick={this.props.onCancel}> CANCEL</button>
                <button className={"btn btn-secondary"} onClick={this.onOk}> OK</button>
            </div>
            label = <h1>New event</h1>
        }

        return (
            <div className="backdrop">
                <div className="event-modal-window">
                    <div className="header">
                        {label}
                    </div>
                    <div className="event-modal-body">
                        <div className="form">
                            <form className="dynamic-form">

                                <div key={'gtitle'} className="group">
                                    <label className="label" key={'ltitle'} htmlFor={'title'}> Title </label>
                                    <input className="input" type={'text'} key={'title'} value={this.state.title}
                                           onChange={(e) => {
                                               this.setState({title: e.target.value})
                                           }}/>
                                </div>

                                <div key={'gtext'} className="group">
                                    <label className="label" key={'ltext'} htmlFor={'text'}> Text </label>
                                    <input className="input" type={'text'} key={'text'} value={this.state.text}
                                           onChange={(e) => {
                                               this.setState({text: e.target.value})
                                           }}/>
                                </div>

                                <div key={'gstart_date'} className="group">
                                    <label className="label" key={'lstart_date'} htmlFor={'start_date'}> Start
                                        Date </label>
                                    <input className="input" type={'datetime-local'} key={'start_date'}
                                           value={this.state.start_date}
                                           onChange={(e) => {
                                               this.setState({start_date: e.target.value})
                                           }}/>
                                </div>

                                <div key={'gfinish_date'} className="group">
                                    <label className="label" key={'lfinish_date'} htmlFor={'finish_date'}> Finish
                                        Date </label>
                                    <input className="input" type={'datetime-local'} key={'finish_date'}
                                           value={this.state.finish_date}
                                           onChange={(e) => {
                                               this.setState({finish_date: e.target.value})
                                           }}/>
                                </div>

                                <div key={'grepeat'} className="group">
                                    <label className="label" key={'lrepeat'} htmlFor={'repeat'}> Repeat </label>
                                    {this.select()}
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="event-footer">
                        {buttons}
                    </div>
                    <Modal show={this.state.isOpen} onCancel={this.toggleModal} onOk={this.delete}
                           header={"Remove event \"" + this.state.title + "\""}>
                        Are you sure you want to delete the event "{this.state.title}"?
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.events,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteEvent: (id) => {
            return dispatch(events.deleteEvent(id));
        },
        updateEvent: (id, model) => {
            return dispatch(events.updateEvent(id, model));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);