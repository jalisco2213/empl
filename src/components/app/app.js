import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeesAddForm from '../employeers-add-form/employeers-add-form';

function App() {
    const data = [
        { name: 'Ivan K.', salary: 700, increase: false },
        { name: 'Elizabeth F.', salary: 1210, increase: true },
        { name: 'German Q.', salary: 960, increase: false },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeersList data={data} />

            <EmployeesAddForm />
        </div>
    );
}

export default App;