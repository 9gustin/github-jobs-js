import React from 'react';
import backgroundImg from '../assets/img/backgroundImg.png';
import backgroundImgResponsive from '../assets/img/responsiveBackgroundImg.png';
import Button from './Button';
import IconWork from './IconWork';
import Input from './Input';

interface Props {}
const FormBusqueda: React.FC<Props> = () => {
    return (
        <form data-component="form-search" className="h-32 search-div rounded-xl flex justify-center items-center">
            <img src={backgroundImg} alt="" className="object-contain hidden lg:block"/>
            <img src={backgroundImgResponsive} alt="" className="object-contain block lg:hidden"/>
            <div className="flex w-5/6 relative">
                <span className="absolute pl-5 flex items-center top-0 bottom-0 text-sm">
                    <IconWork/>
                </span>
                <Input placeholder="Title, companies, expertise or benefits" />
                <Button text="Search"/>
            </div>
        </form>
    );
};

export default FormBusqueda;