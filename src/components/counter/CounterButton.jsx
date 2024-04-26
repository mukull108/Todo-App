import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementCount, decrementCount}){
    return(
        <div>
            <div>
                <button className="counterButton" 
                    onClick= {() => incrementCount(by)}
                >+{by}</button>

                <button className="counterButton" 
                    onClick= {() => decrementCount(by)}
                >-{by}</button>
            </div>
            
        </div>
    )
  
}
CounterButton.propTypes = {
    by: PropTypes.number
}
CounterButton.defaultProps = {
    by: 1
}