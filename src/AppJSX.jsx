import logo from './logo.svg';
import './App.css';

function AppProfile() {
  const name = '동희';
  const list = ['우유','딸기','바나나'];
  return (
    <>
    <h1 className=''>{`Hello! ${name}`}</h1>
    <h2>Hello!</h2>
    <ul>
      {list.map((item)=>(
        <li>{item}</li>
      ))}
    </ul>
    </>
  );
}

export default AppProfile;
