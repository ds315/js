
import { useState } from "react";

import { Main, Head, Text, Bold, Divider } from "../components/styled";
import { View, Image } from "../components/image";

export default function AsuPage()
{
	const [pic, setPic] = useState('');
	const [show, setShow] = useState(false);

	function view(pic) { setPic(pic);  setShow(true) }

	return <Main>
		<View pic={pic} show={show} close={() => setShow(false)} />
		<Head top>Автоматизированные Системы Управления<br/>Технологическими Процессами</Head>
		<Text>
				Мы осуществляем разработку программного обеспечения (ПО) для контроллеров (PLC), панелей оператора (HMI),
			SCADA и MES систем для промышленных предприятий и инжиниринговых компаний.
		</Text>
		<Head>Предлагаем следующие виды работ:</Head>
		<Text bold>- разработку проектов АСУ ТП</Text>
		<Text>Выполняем разработку программного обеспечения для ПЛК, HMI и SCADA систем.</Text>
		<Text>
			<Image img='new.png' view={() => view('newb.png')} />
			Работаем преимущественно с оборудованием и ПО <Bold>Siemens</Bold>, которое не только является надежным, но
			и покрывает весь спектр задач по автоматизации технологических процессов от небольших (локальных) до сложных
			(распределённых) систем. Также Siemens ведёт гибкую ценовую политику и отличается наличием своей продукции
			на складах поставщиков. Это несомненно является преимуществом при разработке и дальнейшей эксплуатации.
		</Text>
		<Text>
				На ряду с Siemens готовы рассмотреть и других производителей оборудования и ПО, таких как:<br/>
			<Bold>Allen Bradley, Schneider, Wago, Weintek, WonderWare</Bold> и других.<br/><br/>
			<Image img='ab.png' /><Image img='m340.png' /><Image img='wago.png' /><Image img='wein.png' />
		</Text>
		<Text>
				Используем самые последние разработки производителей оборудования и программного обеспечения, что
			позволяет получить идеальное соотношение цена-качество результата.
		</Text>
		<Text>
				Пишем качественный, высокопроизводительный код, что позволяет исполнять более сложные технологические
			процессы на более простом оборудовании, что в свою очередь позволяет снизить общую стоимость
			прграммно-технического комплекса (ПТК).
		</Text>
		<Text bold>- пуско-наладочные работы (ПНР)</Text>
		<Text>
				В качестве инженеров по автоматизации технологических процессов, проводим ПНР технологического
			оборудования любой сложности.
		</Text>
		<Text bold>- добавление нового функционала и корректировка существующих технологических процессов</Text>
		<Text>
				Технологические процессы постоянно совершенствуются, появляются новые виды сырья и расходных материалов.
			Поэтому при эксплуатации производственного оборудования возникает необходимость откорректировать существующий
			технологический процесс или добавить в него новую возможность.
		</Text>
		<Text>
			Мы готовы провести эту работу в соответствии с требованиями производства.
		</Text>
		<Text bold>- модернизация устаревшего оборудования</Text>
		<Text>
				Со временем электронные компоненты выходят из строя, ремонты оборудования учащаются, простои, а,
			следовательно, потери увеличиваются. И приходит момент, когда лучше сделать модернизацию, чем нести потери
			от устаревшего мало-эффективного оборудования.
		</Text>
		<Text>
				Мы готовы провести полную или частичную модернизацию оборудования, что несомненно приведёт к повышению
			производительности оборудования, повышению качества выпускаемой продукции, снижению производственных издержек.
		</Text>
		<Head>Нашими преимуществами являются:</Head>
		<Text bold>- более низкая цена проекта</Text>
		<Text>
				У нас нет лишних расходов (аренда большого офиса в центре Москвы, начальников и секретарш), поэтому мы
			можем предложить более низкую цену и более удобные условия оплаты по сравнению с крупными инжиниринговыми
			компаниями.
		</Text>
		<Text bold>- более высокое качество работ</Text>
		<Text>
				Каждый инженер занимается только одним проектом, что позволяет максимально сконцентрироваться на нём и
			получить максимальное качество работы. В крупных же компаниях инженерам приходится вести несколько проектов
			одновременно, что ведёт к снижению качества результата и увеличению сроков выполнения работ.
		</Text>
		<Text bold>- более короткие сроки выполнения работ</Text>
		<Text>
				В дополнение к предыдущему пункту у нас нет лишней бюрократии и большого количества совещаний как в
			крупных компаниях. Это также позволяет снизить сроки выполнения работ.
		</Text>
		<Divider/>
		<Text>
			В качестве примера возьмём два абсолютно одинаковых проекта по модернизации сепараторов на пивном производстве:
		</Text>
		<Text bold>- первый проект выполнила крупная известная иностранная инжиниринговая компания</Text>
		<Text>
				Была произведена замена панельного контроллера Siemens C7-633 на контроллер Siemens S7-314C и панель
			оператора Siemens TP700 Comfort INOX.
		</Text>
		<Text>
				Было заново разработано только ПО панели оператора. В контроллере остался старый код, который не может
			работать на новом поколении контроллеров S7-1200. Контроллер S7-314C и сеть ProfiBus также остались
			предыдущего поколения.
		</Text>
		<Text>Срок исполнения более 6 месяцев.</Text>
		<Text bold>- Второй проект выполнили мы</Text>
		<Text>
				Была также произведена замена панельного контроллера Siemens C7-633, но на контроллер Siemens S7-1214С
			и панель оператора Siemens TP700 Comfort.
		</Text>
		<Text>
				Мы разработали заново и ПО панели оператора и ПО контроллера. Это позволило применить новое поколение
			контроллеров S7-1200 и новую сеть ProfiNet.
		</Text>
		<Text>Срок исполнения менее 3 месяцев.</Text>
		<Text>Стоимость проекта на 30 % ниже.</Text>
		<Divider/>
		<Text>
				Таким образом за меньшую цену, а главное за более короткий срок, заказчик получил модернизацию на самое
			современное оборудование.
		</Text>
		<Head>Некоторые наши проекты:</Head>
		<Text>
			Разработка ПО для ТП Сепарация. Контроллер Siemens S7-315. Панель оператора Siemens TP 1500 Comfort.<br/><br/>
			<Image img='nz1.jpg' view={() => view('nz1b.jpg')} />
			<Image img='nz2.jpg' view={() => view('nz2b.jpg')} />
			<Image img='nz3.jpg' view={() => view('nz3b.jpg')} />
		</Text>
		<Text>
			Разработка ПО для ТП Десорбция. Контроллер Siemens S7-317. Панель оператора Siemens IPC 477D 19".<br/><br/>
			<Image img='agmk1.jpg' view={() => view('agmk1b.jpg')} />
			<Image img='agmk2.jpg' view={() => view('agmk2b.jpg')} />
			<Image img='agmk3.jpg' view={() => view('agmk3b.jpg')} />
			<Image img='agmk4.jpg' view={() => view('agmk4b.jpg')} />
		</Text>
		<Text>
			Разработка SCADA для ТП Флотация. WonderWare System Platform 2014 R2 (InTouch + Historian).<br/><br/>
			<Image img='dob1.jpg' view={() => view('dob1b.jpg')} />
			<Image img='dob2.jpg' view={() => view('dob2b.jpg')} />
		</Text>
		<Text>
			Разработка ПО для ТП Сгущение. Контроллер Siemens S7-315. Панель оператора Siemens TP 1500 Comfort.<br/><br/>
			<Image img='d30.jpg' view={() => view('d30b.jpg')} />
		</Text>
	</Main>
}
