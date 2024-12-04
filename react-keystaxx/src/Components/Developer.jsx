import { useLocation } from "react-router-dom"

const devPic = {

}

export default function Developer(){
    return(
        <>
        <div className="DevCon">
            <div className="kepResume">
                <div className="picCon"></div>
                <div className="resumeCon">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, fugit accusamus incidunt odio aspernatur doloribus corrupti dolore aliquam ab nisi corporis, cum esse atque expedita aliquid autem officiis quas sed?</p>
                </div>
            </div>
            <div className="chrisResume">
                <div className="picCon"></div>
                <div className="resumeCon">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptates, architecto impedit eos perferendis animi in libero harum porro voluptatibus ratione tenetur eveniet rerum delectus corporis aspernatur, ex suscipit veniam!</p>
                </div>
            </div>
        </div>
        </>
    )
}