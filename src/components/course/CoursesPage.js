import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActons from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: "" }
        };
        this.OnTitleChange = this.OnTitleChange.bind(this);
        this.OnClickSave = this.OnClickSave.bind(this);
        this.courseRow = this.courseRow.bind(this);
    }

    OnTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }
    OnClickSave() {
        this.props.actions.createCourse(this.state.course);
        this.setState({ course: { title: "" } });
    }

    // OnTitleChange = (event) => {
    //     const course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState({ course: course });
    // }

    // OnClickSave = () => {
    //     this.props.dispatch(courseActons.createCourse(this.state.course));
    // }
    courseRow(course, index) {
        return <div key={index} >{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>CoursesPage Page </h1>
                {this.props.courses.map(this.courseRow)}
                <br />
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.OnTitleChange}
                    value={this.state.course.title}
                />
                <input
                    type="button"
                    value="Save"
                    onClick={this.OnClickSave}
                />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    // debugger;
    return {
        courses: state.courses
    };
}

function mapDispathToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActons, dispatch)
    };
}

export default connect(mapStateToProps, mapDispathToProps)(CoursesPage);
