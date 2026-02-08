import { connect } from 'react-redux'
import './App.css'
import { useState } from 'react'
import { addTodo, toggleTodo,clearTodo,allClearTodo } from './redux/actions/index.actions'

function App(props) {
  const [todo, setTodo]= useState('')
  return (
    <div className='App'>
      <div className='adding-input'>
        <h1>YAPILACAKLAR LİSTESİ</h1>
        <div>
          <input value = {todo} 
          onChange = {(e) =>  setTodo(e.target.value)}
           placeholder='Görev Gir' />
          <button onClick={() => {
            if (!todo.trim()) return; 
              props.addTodo(todo.trim());
              setTodo('');
          }} >Ekle</button>
        </div>
      </div>
      <ul className='notes_conteiner'>
        {props.notes.map((note) => (
          <li onClick={() => props.toggleTodo(note.id)}
            key={note.id}
            className={note.completed ? 'completed' : ''}
          >
            {note.todo}
          </li>
        ))}
        <button onClick = {() => props.clearTodo()} className='clear'>Tamamlanan Görevleri Kaldır</button>
          <br/>
        <button onClick = {() => props.allClearTodo()} className='clear'>Hepsini Kaldır</button>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, {addTodo,toggleTodo,clearTodo,allClearTodo})(App)
