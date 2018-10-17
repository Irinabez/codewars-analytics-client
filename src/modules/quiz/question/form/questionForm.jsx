import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, FieldArray, reduxForm } from 'redux-form';
import _ from 'lodash';
import { TextArea, TextField } from '../../../utils/form/form';
import { required } from '../../../utils/form/validators';
// import { questionGetById, questionUpdateById } from '../../_actions/questionActions';
import { renderVariants } from './questionFormVariants';
import Permission from '../../../permission/permission';

class QuestionForm extends Component {
  componentDidMount() {
    const { questionId } = this.props.match.params;
    // if (!_.isEmpty(questionId)) {
    //   this.props.questionGetById(questionId);
    // }
  }

  formSubmit = e => {
    e.preventDefault();

    // const { _id, members } = this.props.questionCurrentInfo;

    // this.props.questionUpdateById(_id, {
    //   name: this.props.questionForm.values.name,
    //   description: this.props.questionForm.values.description
    //   // members
    // });
  };

  render() {
    return (
      <Permission perm="quiz.create">
        <h1>Create Question</h1>

        <Form onSubmit={this.formSubmit}>
          <Row>
            <Col lg="12">
              <Field
                name="name"
                type="text"
                placeholder="Quiz name"
                component={TextField}
                validate={[required]}
              />
            </Col>

            <Col lg="12">
              <Field
                name="description"
                type="text"
                placeholder="Quiz description"
                component={TextArea}
              />
            </Col>

            <Col lg="12" className="mt-4 mt-lg-0">
              <FieldArray name="variants" component={renderVariants} />
            </Col>
          </Row>

          <Row>
            <Col xs="12" lg="12" className="mt-4">
              <Button
                type="submit"
                color="primary"
                disabled={
                  this.props.questionForm &&
                  {}.hasOwnProperty.call(this.props.questionForm, 'syncErrors')
                }
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Permission>
    );
  }
}

const mapStateToProps = state => ({
  questionForm: state.form.question
  // questionCurrentInfo: state.question.questionCurrentInfo
});

const mapDispatchToProps = dispatch => ({
  // questionGetById: questionId => dispatch(questionGetById(questionId)),
  // questionUpdateById: (questionId, questionForm) =>
  //   dispatch(questionUpdateById(questionId, questionForm))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'question' })
)(QuestionForm);
