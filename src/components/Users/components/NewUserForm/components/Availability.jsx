import { Component } from 'react';

export class Availability extends Component {
//checkbox 
  state = {
    isOpenToWork: false,
  };
//метод берёт поле isOpenToWork из объекта state и
//меняет булево значение на противоположное
  handleChange = () => {
    this.setState(prevState => ({ isOpenToWork: !prevState.isOpenToWork }));
  };

  render() {
    const { isOpenToWork, onChange } = this.props;

    return (
      <fieldset className="mt-3">
        <legend className="h6">Availability:</legend>

        <div className="form-check">
          <label className="form-check-label">
            <span>Is open to work</span>
            <input
              className="form-check-input"
              type="checkbox"
              checked={isOpenToWork}
              onChange={onChange}
            />
          </label>
        </div>
      </fieldset>
    );
  }
}