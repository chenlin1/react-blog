/**
 * Created By brand On 2018/1/17
 */
import {combineReducers} from 'redux'
import {articleList} from './ArticleList'
import {tagList} from './Tags'
import {linkList} from './LinkList'
import {HotArtList} from './HotArticle'
import {userinfo} from './UserInfo'
import {artDetail} from './ArtDetail'
import {tagArtList} from './TagArtList'
import {artArchive} from './Archive'
import {artListByDate} from './ArchiveArtList'
import {commentsData} from './Comments'

const reducer = combineReducers({
    articleList,
    tagList,
    HotArtList,
    userinfo,
    artDetail,
    tagArtList,
    artArchive,
    artListByDate,
    linkList,
    commentsData
})

export default reducer