import profile from'../assets/images/profile.png'

const Header = () => {
  return (
    <div>
      <header className="w-10/12 flex flex-col md:flex-row lg:flex-row justify-between items-center py-4 mx-auto">
        <h3 className='text-3xl font-bold text-[#111]'>Knowledge Cafe</h3>
        <img src={profile}></img>
      </header>
    </div>
  );
};

export default Header;