
import { StyledView } from "./styled";

export function View({pic, show, close})
{
	return <StyledView onClick={close} show={show}>
		<img src={'http://asuprog.ru/img/' + pic} style={{height: '100%', margin: '0 auto'}} />
	</StyledView>
}

export function Image({img, view})
{
	const path = 'http://asuprog.ru/img/' + img;

	return !view ? <img align="left" src={path} alt={img} style={{height: 107, marginRight: 10}} />
		: img === 'new.png' ?
		<img align="right" src={path} style={{marginLeft: 20, cursor: 'pointer'}} title="Увеличить" onClick={view} />
		:
		<img align="left" src={path} style={{marginRight: 5, cursor: 'pointer'}} title="Увеличить" onClick={view} />
}
