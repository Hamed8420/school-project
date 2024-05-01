import './addService.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const AddService = () => {


return (

    <div className='home'>
    <Sidebar />
    <div className='cantana'>
    <Navbar />
    
    
    <div className='edits'>
    <h2>Add Service</h2>

    <div className='serveradd'>
    <input type="file" id="file-input" multiple/>

    <label for="file-input">
    Choose File
</label>

    </div>

    <div className='gtr'>
    <h2>Name Service</h2>
    <input
        type="text"
        id="name"
        
        />
    </div>
    <button>ADD</button>
    </div>
    
    </div>
</div>
);
};

export default AddService;