
import { Component } from 'react';
import usersJson from '../../assets/users.json';

import { NewUserForm } from 'components/Users/components/NewUserForm/NewUserForm';
import { Modal } from '../Modal/Modal';
import { UsersList } from './components/UsersList';
import { UsersSearch } from './components/UsersSearch';
import { UsersStats } from './components/UsersStats';
//здесь стили
// import { UsersBlock } from './componentsUsers/ContPar.styled.js';


export class Users extends Component {
    state = {
        users: usersJson,
        isModalOpen: false,
    };
    
//метод перебирает юзеров и оставляет, тех, у кого id не равен, тому, что в него
//передали
// id = 1 [1, 2, 3, 4] -> filter [2, 3, 4]
    
//от куда приходит id?    
    handleDelete = id => {
        this.setState(prevState => {
//если id не равняется user.id, то выражение возвращает true и значение заносится в
// новый массив newUsersList 
            const newUsersList = prevState.users.filter(user => user.id !== id);
        //здесь записываем в state новый массив
        //Это снова перезапустит метод render()
            return { users: newUsersList };
        });
        
        
    };
// Из объекта state берём поле isModalOpen и меняем булево значение на противоположное
    handleToggle = () => {
        this.setState(prevState=>({ isModalOpen: !prevState.isModalOpen}))
    }

    render() {
        const { users, isModalOpen } = this.state;
        return (
        
            <>
 {/* Если  isModalOpen, то модалка не открывается, если true, то открывается*/}
                {isModalOpen && (
  
  // Кнопка закрытия модалки 
                    <Modal onClose={this.handleToggle}>
                        
         < NewUserForm />               
{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur
harum officiis culpa ratione. In tempore molestias voluptates amet minus,
rerum nemo delectus iusto explicabo illo vel quasi, quaerat consectetur! */}
                    </Modal>
                )}

    <button
        className="btn btn-primary mb-4"   
        type="button"
        onClick={this.handleToggle}
    >
                    {/* Open modal */}
                    Create new user
    </button>          

                <UsersSearch />
                <UsersStats users={users} />
{/* пропсом передаём метод  handleDelete*/}
                <UsersList users={users} onDelete={this.handleDelete} />
               
               
            </>
            
        );
    }
}
// названия методов начинаются с handle
// названия пропсов и ивентов  начинаются с on

