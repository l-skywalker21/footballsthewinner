import React from 'react';
import ArticleDialog from './ArticleDialog';
import CardGrid from './CardGrid';
import Articles from '../articles';


export default class MainDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.articles = Articles()
        this.state = {'modalOpen': false, 'activeArticle': 'article1', 'articles': this.articles}
        this.handleCardClick = this.handleCardClick.bind(this)
        this.handleDialogClose = this.handleDialogClose.bind(this)
    }
    handleCardClick(articleTitle){
        this.setState({'activeArticle': articleTitle})
        console.log(articleTitle)
        this.setState({'modalOpen': true})
    }

    handleDialogClose(){
        this.setState({'modalOpen': false})
    }

    render() {
        if (this.state.modalOpen){
            return(
                <div>
                    <ArticleDialog handleClose={this.handleDialogClose} articles={this.state.articles} activeArticle={this.state.activeArticle}/>
                </div>
            )
        } else {
            return (
                <div>
                    <CardGrid handleCardClick={this.handleCardClick} articles={this.state.articles}/>
                </div>
            )
        }
    }
}