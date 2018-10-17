import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Col, Form, Row } from 'reactstrap';
import { Field, FieldArray, reduxForm } from 'redux-form';
import _ from 'lodash';
import { TextArea } from '../../../utils/form/textArea';
import { required, number, minValue1, maxValue5 } from '../../../utils/form/validators';
import { questionCreate } from '../../_actions/questionActions';
import { renderVariants } from './questionFormVariants';
import Permission from '../../../permission/permission';
import TextField from '../../../utils/form/textField';

class QuestionForm extends Component {
  componentDidMount() {
    const { questionId } = this.props.match.params;
    // if (!_.isEmpty(questionId)) {
    //   this.props.questionGetById(questionId);
    // }
  }

  formSubmit = e => {
    e.preventDefault();

    const {
      name,
      description,
      variants,
      reward,
      answerType
    } = this.props.questionForm.values;

    this.props.questionCreate({
      name,
      description,
      variants: variants.map(el => ({ ...el, correct: el.correct || false })),
      reward,
      answerType
    });
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

            <Col lg="12">
              <Field
                name="reward"
                type="number"
                placeholder="Reward"
                component={TextField}
                validate={[required, number, minValue1, maxValue5]}
                defaultValue={1}
              />
            </Col>

            <Col lg="12">
              <Field
                name="answerType"
                type="text"
                placeholder="answerType"
                component={TextField}
                validate={[required]}
                defaultValue="single"
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
                  this.props.questionForm && _.has(this.props.questionForm, 'syncErrors')
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
  questionCreate: form => dispatch(questionCreate(form))
  // questionGetById: questionId => dispatch(questionGetById(questionId)),
  // questionUpdateById: (questionId, questionForm) =>
  // dispatch(questionUpdateById(questionId, questionForm))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: 'question' })
)(QuestionForm);
