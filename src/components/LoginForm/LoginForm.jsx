import { Component } from 'react';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  // handleChangeEmail = event => {
  //   // console.log(event.target.value)
  //   this.setState({ email: event.target.value });
  // }

  //  handleChangePassword = event => {
  //   // console.log(event.target.value)
  //   this.setState({ password: event.target.value });
  // }

 //В место двух методов выше один метод  handleChange

  handleChange = event => {
    // console.log(event)
    console.log( event.target.name )
    const { name, value } = event.target;
    //здесь [name] переменная. Сюда приходит email или password. Замена строк 11 и 16
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
  // Метод предотвращает действия браузера по умолчанию
    event.preventDefault();

    //здесь объект с email и паролем
    // console.log(this.state);
  //сбрасываем до дефолтного значения. Будет пустое поле
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form
        // className="w-25"
        style={{
            backgroundColor: 'gray',
            padding: '15px',
            margin: '0 0 35px',
            width: '300px',
           
        }} 
        onSubmit={this.handleSubmit}>
        <div className="mb-3">
{/*связываем label и input при помощи htmlFor и id */}
          <label htmlFor="email" className="form-label">
            <p>Email address</p>
          </label>

          <input
            id="email"
            type="text"
            style={{width:'250px',}}
            className="form-control"
            name="email"
  //атрибут value создаёт контролируемый компонент. email должен равняться email из state
            value={email}
            onChange={this.handleChange}
            // onChange={this.handleChangeEmail}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <p>Password</p>
            <input
              type="text"
              style={{width:'250px',}}
              className="form-control"
              name="password"
//Контролируемый компонент. Здесь password должен равняться password из state
              value={password}
              onChange={this.handleChange}
              // onChange={this.handleChangePassword}
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}