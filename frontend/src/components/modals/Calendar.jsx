import React, {Component} from 'react';
import "../../css/form.css"
import {calendars} from "../../actions";
import {connect} from "react-redux";
import Modal from "./index";
import {modal as messages} from "../../messages";
import PropTypes from "prop-types";
import {getRandomColor} from "../../lib/general";
import {accessOptions} from "./types";

/**
 * Calendar modal window
 *
 * @param {bool} show               Show or hide modal.
 * @param {} calendars              Actual calendar options.
 * @param {func} onCancel           onCancel function.
 * @param {func} onOK               onOk function.
 *
 */

const initCalendar = {
    title: "",
    is_public: false,
    color: getRandomColor(),
};

class Calendar extends Component {

    state = {
        calendar: initCalendar,
        isOpen: false,
        isOpenError: false,
        errorMessage: null,
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.calendar) {
            this.setState({calendar: nextProps.calendar})
        }
    }

    selectAccess = () => {
        const options = accessOptions ? accessOptions.map((option) => (
            <option className="input"
                    key={Object.keys(option)[0]}
                    value={Object.keys(option)[0]}>
                {Object.values(option)[0]}
            </option>)) : {};
        return <select className="input"
                       value={this.state.calendar.is_public}
                       onChange={(e) => {
                           this.setState({
                               calendar: {
                                   ...this.state.calendar,
                                   is_public: e.target.value
                               }})
                       }}>
            {options}
        </select>
    };

    onOk = () => {
        if (this.state.calendar.title.length === 0){
             this.setState({
                isOpenError: true,
                errorMessage: messages.calendar.error.emptyField
            })
        }
        else this.props.onOk(this.state.calendar)
    };

    delete = () => {
        this.props.deleteCalendar(this.state.calendar.id)
        this.props.onCancel()
    };

    toggleModal = () => this.setState({isOpen: !this.state.isOpen});

    render() {
        if (!this.props.show) return null;

        const buttons = this.state.calendar.id ? <div className={'button-group'}>
                <button className={"btn btn-secondary"} onClick={this.props.onCancel}> CANCEL</button>
                <button className={"btn btn-danger"} onClick={this.toggleModal}> DELETE</button>
                <button className={"btn btn-secondary"} onClick={this.onOk}> OK</button>
            </div> : <div className={'button-group'}>
                <button className={"btn btn-secondary"} onClick={this.props.onCancel}> CANCEL</button>
                <button className={"btn btn-secondary"} onClick={this.onOk}> OK</button>
            </div>;
        const label = this.state.calendar.id ? <h1>Edit calendar "{this.props.calendar.title}"</h1> : <h1>New calendar</h1>;

        return (
            <div className="backdrop">
                <div className="modal-window event">
                    <div className="header">
                        {label}
                    </div>
                    <div className="modal-body">
                        <div className="form">
                            <form>
                                <div key={'gname'} className="group">
                                    <label className="label" key={'lname'} htmlFor={'name'}> Name </label>
                                    <input className="input" type={'text'} key={'name'} value={this.state.calendar.title}
                                           onChange={(e) => {
                                               this.setState({calendar: {
                                                   ...this.state.calendar,
                                                       title: e.target.value,
                                                   }})
                                           }}/>
                                </div>

                                <div key={'gcolor'} className="group">
                                    <label className="label" key={'lcolor'}
                                           htmlFor={'color'}> Color </label>
                                    <input className="input" type="color" value={this.state.calendar.color} onChange={(e) => {
                                        this.setState({ calendar:
                                                {...this.state.calendar,
                                                    color: e.target.value,
                                                }})
                                    }}></input>
                                </div>
                                <div key={'gaccess'} className="group">
                                    <label className="label" key={'laccess'}
                                           htmlFor={'access'}> Access </label>
                                    {this.selectAccess()}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer">
                        {buttons}
                    </div>
                    <Modal
                        show={this.state.isOpen}
                        onCancel={this.toggleModal}
                        onOk={this.delete}
                        header={"Remove calendar \"" + this.state.calendar.title + "\""}>
                        Are you sure you want to delete the calendar "{this.state.calendar.title}"?
                    </Modal>
                    <Modal
                        show={this.state.isOpenError}
                        onOk={() => this.setState({isOpenError: false, errorMessage: null})}
                        header={"Error"}>
                        {this.state.errorMessage}
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCalendar: (id) => dispatch(calendars.deleteCalendar(id)),
    }
};

const mapStateToProps = state => {
    return {
        events: state.events,
        calendars: state.calendars.calendars,
    }
};

Calendar.propTypes = {
    show : PropTypes.bool,
    calendar: PropTypes.object,
    calendars: PropTypes.array,

    onCancel: PropTypes.func,
    onOk : PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);