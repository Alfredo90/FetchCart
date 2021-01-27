import {useState, useMemo} from 'react'

const Billing = () => {
    const [state, setState] = useState(  
{
    firstName: '',
    lastName:'',   
    address: '',
    aptNum: '',
    city: '',
    usState: '',
    zipCode: ''
}
)

    const usStates = useMemo(() => [
        "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", 
        "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", 
        "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", 
        "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV",
        "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", 
        "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", 
        "WY"
    ], [])

    const changeHandler = e => setState({...state, [e.target.name]: e.target.value})
    


    return (
        <form>
            <fieldset>
                <legend>Billing</legend>
                <label>
                    First Name
                    <input type="text" name="firstName" value={state.firstName} required autoComplete="given-name" onChange={changeHandler}/>
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" value={state.lastName} required autoComplete="family-name" onChange={changeHandler}/>
                </label>
                <label>
                    Address
                    <input type="text" name="address" value={state.address} required autoComplete="shipping street-address" onChange={changeHandler}/>
                </label>
                <label>
                    Apt/Suite (optional)
                    <input type="text" name="aptNum" value={state.aptNum}  onChange={changeHandler}/>
                </label>
                <label>
                    City
                    <input type="text" name="city" value={state.city} required autoComplete="shipping locality" onChange={changeHandler}/>
                </label>
                <label>
                    State
                    <input type="text" list="us-state" name="usState" value={state.usState} required autoComplete="shipping region" onChange={changeHandler}/>
                    <datalist id="us-state">
                        {usStates.map(usState => <option key={usState}value={usState}/>)}
                    </datalist>
                </label>
                <label>
                    Zip Code
                    <input type="text" name="zipCode" value={state.zipCode} required autoComplete="shipping postal-code" onChange={changeHandler}/>
                </label>
            </fieldset>
        </form>



    )
}
export default Billing