import { useSelector } from 'react-redux';
import { Parachain } from '../../models/Chain';
import { selectCurrentRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { Lease } from '../../models/Lease';
import './ParachainsPage.css';

export const ParachainsPage = () => {
  //TODO : useEffect call API then retrieve from store
  const parachains = [
    {
      paraId: 1000,
      name: 'Statemint',
      leasePeriods: [
        { periodIndex: '13', account: 'J4ughaeYHGgv64aze64adadFOM', deposit: 100.05 },
        { periodIndex: '14', account: 'J4ughaeYHGgv64aze64adadFOM', deposit: 100.05 },
        { periodIndex: '15', account: 'J4ughaeYHGgv64aze64adadFOM', deposit: 100.05 },
      ] as Lease[],
    },
  ] as Parachain[];

  const relayChain = useSelector(selectCurrentRelayChain);

  return (
    <div className='parachain-page'>
      <table className='parachain-table'>
        <tr>
          <th>Parachain Id</th>
          <th>Name</th>
          <th>Lease Periods</th>
        </tr>
        {parachains.map((p) => {
          return (
            <tr>
              <td>{p.paraId}</td>
              <td>{p.name}</td>
              <td>{p.leasePeriods[0] + '-' + p.leasePeriods[p.leasePeriods.length - 1]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
