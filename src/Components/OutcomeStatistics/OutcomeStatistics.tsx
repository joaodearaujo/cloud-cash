import { OutcomeStatisticsProps } from './OutcomeStatistics.type';

const OutcomeStatistics = ({children} :OutcomeStatisticsProps ) => {
    return(
        <div className="os-container">
            {children}
        </div>
    )
}

export default OutcomeStatistics;