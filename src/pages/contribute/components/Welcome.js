import React from 'react';
import { connect } from 'react-redux';
import WalletView from './WalletView';
import Contribute from './Contribute';
import CSTKScore from './CSTKScore';

const Comp = ({ effectiveBalance }) => {
  return (
    <>
      <section className="section has-text-left">
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent  ">
            <article className="is-child notification is-primary">
              <WalletView />
            </article>
            {effectiveBalance > 0 ? null : (
              <article className="is-child notification is-primary">
                <CSTKScore />
              </article>
            )}
          </div>
          <div className="tile is-parent">
            <Contribute />
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = state => {
  return {
    effectiveBalance: state.effectiveBalance,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetAgreed: () => dispatch({ type: 'AGREE_TANDC' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
