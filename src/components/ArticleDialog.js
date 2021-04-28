import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';

export default class ArticleDialog extends React.Component {
    constructor(props) {
        super(props);
        this.styles = makeStyles((theme) => ({
            root: {
                minWidth: 275,
            }, 
        }));
        this.state = {}
    }

    componentWillMount(){
        var i;
        console.log("Searching")
        console.log(this.props.activeArticle)
        for (i = 0; i < this.props.articles.length; i++) {
          if (this.props.articles[i].Title === this.props.activeArticle) {
              this.setState({'article':this.props.articles[i]})
              console.log("Found one")
          }
        }  

    }

    render() {

        return (
            <div>
                <Dialog open={true} onClose={this.props.handleClose}>
                    {/* <DialogTitle style={{fontSize: 40}} id="simple-dialog-title">{this.state.article.Title}</DialogTitle> */}
                    <div style={{'padding': '16px 24px', 'fontSize': 30}}>
                        {this.state.article.Title}
                    </div>
                    <div style={{'padding': '0px 24px', 'fontSize': 18}}>
                        {this.state.article.Date}
                    </div>
                    <div
                        style={{'padding': '16px 24px', 'fontSize': 16}}
                        dangerouslySetInnerHTML={{
                            __html: this.state.article.Text
                        }}
                    >
                    </div>

                    {/* <DialogContent>
                        <DialogContentText>
                            {this.state.article.Text}
                        </DialogContentText>
                    </DialogContent> */}
                </Dialog>
            </div>
        )
    }
}