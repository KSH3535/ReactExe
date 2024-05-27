import Card from "./Card";

export default function ProfileCard(props) {
    return (
        <div>
            <Card title="Albert" backgroundColor="#43a04e">
                <p>안녕하세요. 알버트 입니다.</p>
                <p>리액트 실력이 점점 늘어가고 있습니다.</p>
            </Card>
            <Card title="Alex" backgroundColor="#04304e">
                <p>알렉스의 요리</p>
                <ul>
                    <li>두부김치 카나페</li>
                    <li>로제떡볶이</li>
                    <li>김치피자탕수육</li>
                    <li>명란 파스타</li>
                    <li>카레빵</li>
                </ul>
            </Card>
        </div>
    )
}