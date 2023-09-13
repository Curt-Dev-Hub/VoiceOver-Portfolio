import './ErrorPage.css';

export default function ErrorPage(props) {
    return (
        <div className={"error-page"}>
            <p className='error-message'>
                Oops! <br></br> Something went wrong! 
                <br></br><br></br>
                Let's try a reload..
            </p>
        </div>
    );
} 