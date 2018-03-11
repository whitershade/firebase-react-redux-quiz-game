import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

export default class QuestionsPage extends PureComponent {
  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    const { questions} = this.props;

    return (
      <div>
        <Link href="/questions/new" to="/questions/new">
          New question
        </Link>
        <h1>questions</h1>
        <ul>
          {map(questions, ({ id, attributes: { question } }) => (
            <li key={id}>
              <Link to={`/questions/${id}`} href={`/questions/${id}`}>
                { question }
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
