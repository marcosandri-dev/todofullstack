interface TodoMessageProps {
  children: React.ReactNode;
}

const TodoMessage: React.FC<TodoMessageProps> = ({ children }) => {
  return (<div>
    {children}
  </div>);
}

export default TodoMessage;