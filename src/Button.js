function Button({ className ='', color ='bule', children, onClick }) {
  return <button className={className} onClick={onClick}>
      {children}
    </button>;
}

export default Button;
