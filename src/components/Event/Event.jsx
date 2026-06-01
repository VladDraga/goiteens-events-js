import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { Info } from './Event.styled'
import { Card } from './Event.styled'
import { EventName } from './Event.styled'
import { Chip } from './Event.styled'
import { FaCalendar } from 'react-icons/fa'


export const Event = ({name, location, speaker, type, start, end}) => {
    return (
        <Card>
        <EventName>{name}</EventName>
        <Info>
        <FaMapMarkerAlt/>
        {location}
        </Info>

        <Info>
        <FaUserAlt/>
        {speaker}
        </Info>

        <Info>
        <FaCalendar />
        {end}
    </Info>

        <Info>
        <FaClock />
        {start}
    </Info>
    

    

        <Chip $eventType={type}>{type}</Chip>
        </Card>
    )
}
