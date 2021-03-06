/**
 * Created By brand On 2018/1/18
 */
import React, {Component} from 'react'
import Author from '../author/Author'
import HotArticle from "../../containers/HotArticle"
import Tags from "../../containers/Tags"
import Archive from '../../containers/Archive'
import Link from "../../containers/LinkList"
import QueueAnim from 'rc-queue-anim';

class RightSide extends Component {
    render() {
        return (
            <div>
                <QueueAnim
                    style={{overflow:"hidden"}}
                    animConfig={[
                        { opacity: [1, 0], translateY: [0, 1500] },
                        { opacity: [1, 0], translateY: [0, -1500] }
                    ]}>
                    <Author key="Author"/>
                    <HotArticle key="HotArticle"/>
                    <Tags key="Tags"/>
                    <Archive key="Archive"/>
                    <Link key="Link"/>
                </QueueAnim>
            </div>
        )
    }
}

export default RightSide