import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RelayChain } from '../../models/Chain';
import { selectRelayChain } from '../../store/application-state/ApplicationStateAction';
import { selectCurrentRelayChain } from '../../store/application-state/ApplicationStateSelector';

interface RelayChainsTabProps {
  chains: RelayChain[];
}

export const RelayChainsTab: (props: RelayChainsTabProps) => JSX.Element = ({ chains }: RelayChainsTabProps) => {
  const currentRelayChain = useSelector(selectCurrentRelayChain);

  const dispatch = useDispatch();

  const switchChain = useCallback(
    (chainName) => {
      const chain = chains.find((c) => c.name === chainName);
      if (chain !== undefined) dispatch(selectRelayChain(chain));
    },
    [chains, dispatch],
  );
  return (
    <div
      style={{ backgroundColor: currentRelayChain.mainColor, color: currentRelayChain.secondaryColor }}
      className='polkauction-header'
    >
      <nav>
        <div className='relay-chains-tab'>
          {chains.map((c) => (
            <button id={c.name} onClick={(e) => switchChain(c.name)}>
              <span
                style={{
                  backgroundColor: currentRelayChain.name === c.name ? '#ccc' : currentRelayChain.mainColor,
                  color: currentRelayChain.secondaryColor,
                }}
              >
                <h3>{c.name}</h3>
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
