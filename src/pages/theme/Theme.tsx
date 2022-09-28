import './theme.scss';
import { Card } from '../../bemit/components';

const Theme = () => {
    return (
        <div className="theme">
            <Card className='theme__content'>
                <h2>Personalización de la interfaz</h2>
                <p className='u-text-muted'>Personaliza el tamaño de letra y el tema</p>

                <div className="theme__size">
                    <h4>Tamaño de letra</h4>
                    <div className='theme__size-container'>
                        <h6>Aa</h6>
                        <div className="theme__size-values">
                            <span className="theme__f1"></span>
                            <span className="theme__f2 theme__f2--active"></span>
                            <span className="theme__f3"></span>
                            <span className="theme__f4"></span>
                            <span className="theme__f5"></span>
                        </div>
                        <h3>Aa</h3>
                    </div>
                </div>

                <div className="theme__color">
                    <h4>Color principal</h4>
                    <div className="theme__color-values">
                        <span className="theme__c1"></span>
                        <span className="theme__c2"></span>
                        <span className="theme__c3"></span>
                        <span className="theme__c4 theme__c4--active"></span>
                        <span className="theme__c5"></span>
                    </div>
                </div>

                <div className="theme__bg">
                    <h4>Color de fondo</h4>
                    <div className="theme__bg-values">
                        <div className="theme__bg1 theme__bg1--active">
                            <span></span>
                            <h5>Light</h5>
                        </div>
                        <div className="theme__bg2">
                            <span></span>
                            <h5>Dim</h5>
                        </div>
                        <div className="theme__bg3">
                            <span></span>
                            <h5>Dark</h5>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Theme;