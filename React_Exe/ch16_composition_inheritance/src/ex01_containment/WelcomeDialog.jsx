import FancyBorder from "./FancyBorder"

export default function WelcomeDialog(props) {
    return (
        <FancyBorder color="blue">
            {/* 아래 부분이 FancyBorder의 children으로 구성된다 */}
            <h1 className="Dialog-title">
                어서오세요
            </h1>
            <p className="Dialog-message">
                우리 사이트에 방문하신 것을 환영합니다!
            </p>
        </FancyBorder>
    )
}