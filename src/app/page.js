import HomePage from '../app/component/home/page'
import NavBar from '../app/component/navbar/page'

export default function Home() {
  return (
    <div className={'w-full h-screen flex flex-col justify-center items-center font-poppin'}>
      <NavBar></NavBar>
      <HomePage></HomePage>
    </div>
  );
}
