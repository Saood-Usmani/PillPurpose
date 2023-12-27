import Button from '@mui/material/Button';
import NavBar from "./navbar";
const home = () => {
    return (
        <div>
            <NavBar />
            <div class="text-center">
                <div>
                    <h1 class="text-3xl font-bold underline p-10">Find Donations</h1>
                    <hr class="h-px w-6/12 bg-gray-200 border-0 dark:bg-gray-700 m-auto mb-10"></hr>
                    <h2>Start by finding a partner institution near you and make a request without having to sign up! We and our partners are commited to make medicine avalible to all</h2>
                    <div class="mt-10">
                        <Button variant="contained">Let's Go</Button>
                    </div>
                </div>
                <div class='p-10'>
                    <h1 class="text-3xl font-bold underline p-10" >How it works</h1>
                    <hr class="h-px w-6/12 bg-gray-200 border-0 dark:bg-red-700 m-auto mb-10"></hr>
                    <div className='grid grid-cols-4 gap-12 p-50'>
                        <h2>Find a partner institution near you</h2>
                        <h2>Send a request</h2>
                        <h2>Get a confirmation from our partner</h2>
                        <h2>Pick up your medicine</h2>
                    </div>
                </div>
                <div class="bg-red-700">
                    <h1 class="text-3xl font-bold underline p-10">Read</h1>
                    <h3>PillPurpose - Giving Old Pills A New Purpose</h3>
                    {/* <footer></footer> */}
                </div>
            </div>
        </div>
    )
}

export default home