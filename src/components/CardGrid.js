import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

// import image from './../image.jpeg'


export default class CardGrid extends React.Component {
    constructor(props) {
        super(props);
        this.styles = makeStyles((theme) => ({
            root: {
                minWidth: 275,
            }
        }));
        this.state = {}
    }

    render() {

        return (
            <div>
                {this.props.articles.map((article) => (
                    <Card className={this.styles.root} style={{display: 'inline-block', float: 'left', padding: '14px', margin: '22px', width: 340, height: 440}}>
                        <CardActionArea onClick={ () => this.props.handleCardClick(article.Title)}>
                            <img src={ require( "./../" + article.Image)} alt="Banner" style={{width:340, height:250 }}/>
                            <Typography style={{marginTop:10, textAlign: 'left', fontSize:24}}>{article.Title}</Typography>
                            <Typography style={{textAlign: 'left', fontWeight:50}}>{article.Date}</Typography>
                            <Typography style={{marginTop:12, textAlign: 'left'}}>{article.Tease}</Typography>
                        </CardActionArea>
                    </Card>
                ))}
                {/* <Card className={this.styles.root} style={{display: 'inline-block', float: 'left', padding: '10px', margin: '20px', width: 250, height: 300}}>
                    <Typography variant="h5" component="h2">Welcome!</Typography>
                </Card> */}
            </div>
        )
    }
}