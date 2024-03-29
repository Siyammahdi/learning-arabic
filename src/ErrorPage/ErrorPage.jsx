

const ErrorPage = () => {

    const text1 = "Oops! Looks like you're lost."
    const text2 = "Let's get you back "

    return (
        <div>
            <div className="text-center pt-36">
                <h1 className="mb-4 text-9xl font-semibold text-amber-500">404</h1>
                <p className="mb-4 text-lg text-gray-600">{text1}</p>
                <div className="animate-bounce">
                    <svg className="mx-auto h-16 w-16 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </div>
                <p className="mt-4 text-gray-600">{text2}<a href="/" className="text-blue-500">home</a></p>
            </div>
        </div>
        
    );
};

export default ErrorPage;