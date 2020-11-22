import React from 'react';
import IconLocation from './IconLocation';
import IconTime from './IconTime';

const JobItem = (): JSX.Element => {
    return (

        <a className="flex overflow-hidden">
            <div className="w-28 h-28 flex justify-center p-1">
                <img src="https://s3-alpha-sig.figma.com/img/27b6/1a9d/d6c11f57df0b294adf19bd0eac260ada?Expires=1606694400&Signature=MLsYUwbzRefglzg7jaHBcKVsPB5i2wHYEld3E~rJKWxkC9asaptCYjCxew6qYPyDNT5bFEIhlUtp6IPJ9Wuh8XJJDnxx8lv2-8UnDRdHAXeCOnNfFudVSApdAf33BDb93ZyuKq1zDBk2h9hFNSly~T6g-3zOU4lHcVX42JE4RGDGdpdpqr~dSv0OqZZZRtXoNH28xEaZDm~9q6vp06TD6hmO22kwl7zadEIWuFj2f8ywH8IpaHEKMxIsOSnCvbiE-Y6jWDcnk88S4xfsNYUaBagtyjDMViIB~Rh0P2-wvELmEG0KmL3Dr6qyrRTdUK1KjPxx~PP7-fmQ0O0dRMY~pA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="" className="object-contain  rounded" />
            </div>
            <div className="text-xs w-3/4 lg:w-11/12 pl-2">
                <strong className="my-3">Buenardo team!</strong>
                <h5 className="text-base mt-2 mb-4">Front-End Software Engineer</h5>
                <span className="rounded px-2 py-1 mt-2 border-solid border-blue-900 border-2 text-xs font-bold">Full time</span>
                <div className="flex justify-end float-right">
                    <span className="text-gray-400 flex items-center my-4 mr-4 text-xs"><IconLocation className="mr-1"/>  Location</span>
                    <span className="text-gray-400 flex items-center my-4 mr-4 text-xs"> <IconTime className="mr-1"/> 5 days ago</span>
                </div>
            </div>
        </a>
    );
};

export default JobItem;