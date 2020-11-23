import React, { useContext } from 'react';
import backgroundImg from '../assets/img/backgroundImg.png';
import backgroundImgResponsive from '../assets/img/responsiveBackgroundImg.png';
import JobContext from '../context/job/JobContext';
import Button from './Button';
import IconWork from './IconWork';
import Input from './Input';

interface Props {}
const FormBusqueda: React.FC<Props> = () => {
    const inputBusqueda = React.createRef<HTMLInputElement>();
    const {setSearch, searchJobs, filters} = useContext(JobContext);

    const handleInputChange = () => {
        setSearch && setSearch(inputBusqueda?.current?.value);
    }

    const handleSearch = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchJobs && searchJobs();
    }

    return (
        <form onSubmit={(event) => {handleSearch(event)}} className="h-32 search-div rounded-xl flex justify-center items-center">
            <img src={backgroundImg} alt="" className="object-contain hidden lg:block"/>
            <img src={backgroundImgResponsive} alt="" className="object-contain block lg:hidden"/>
            <div className="flex w-5/6 relative">
                <span className="absolute pl-5 flex items-center top-0 bottom-0 text-sm">
                    <IconWork/>
                </span>
                <Input placeholder="Title, companies, expertise or benefits" reference={inputBusqueda} onChange={handleInputChange} value={filters?.search}/>
                <Button text="Search"/>
            </div>
        </form>
    );
};

export default FormBusqueda;