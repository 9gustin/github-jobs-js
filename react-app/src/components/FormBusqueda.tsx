import React, { useContext } from 'react';
import backgroundImg from '../assets/img/backgroundImg.png';
import backgroundImgResponsive from '../assets/img/responsiveBackgroundImg.png';
import JobContext from '../context/job/JobContext';
import Button from './Button';
import IconWork from './IconWork';
import Input from './Input';

interface Props {
    handleSearch: Function
}
const FormBusqueda: React.FC<Props> = ({handleSearch}) => {
    const inputBusqueda = React.createRef<HTMLInputElement>();
    const {setText} = useContext(JobContext);

    const handleInputChange = () => {
        setText && setText(inputBusqueda?.current?.value);
    }

    return (
        <form data-component="form-search" className="h-32 search-div rounded-xl flex justify-center items-center">
            <img src={backgroundImg} alt="" className="object-contain hidden lg:block"/>
            <img src={backgroundImgResponsive} alt="" className="object-contain block lg:hidden"/>
            <div className="flex w-5/6 relative">
                <span className="absolute pl-5 flex items-center top-0 bottom-0 text-sm">
                    <IconWork/>
                </span>
                <Input placeholder="Title, companies, expertise or benefits" reference={inputBusqueda} onChange={handleInputChange}/>
                <Button text="Search"/>
            </div>
        </form>
    );
};

export default FormBusqueda;