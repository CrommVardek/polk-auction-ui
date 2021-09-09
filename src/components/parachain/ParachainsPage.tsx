import { Parachain } from '../../models/Chain';
import { Lease } from '../../models/Lease';
import { selectRelayChain } from '../../store/application-state/ApplicationStateSelector';
import { PolkAuctionStore } from '../../store/PolkAuctionStore';
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
    {
      paraId: 2000,
      name: 'Karura',
      leasePeriods: [
        { periodIndex: '13', account: 'A58ehaeYHGgv64aze64adadFOM', deposit: 500000.05 },
        { periodIndex: '14', account: 'A58ehaeYHGgv64aze64adadFOM', deposit: 500000.05 },
        { periodIndex: '15', account: 'A58ehaeYHGgv64aze64adadFOM', deposit: 500000.05 },
      ] as Lease[],
    },
    {
      paraId: 2013,
      name: 'Moonriver',
      leasePeriods: [
        { periodIndex: '13', account: 'Dx5ghaeYHGgv64aze64adadFOM', deposit: 150000 },
        { periodIndex: '14', account: 'Dx5ghaeYHGgv64aze64adadFOM', deposit: 150000 },
        { periodIndex: '15', account: 'Dx5ghaeYHGgv64aze64adadFOM', deposit: 150000 },
      ] as Lease[],
    },
  ] as Parachain[];

  const relayChain = PolkAuctionStore.useState(selectRelayChain);

  return (
    <div className='parachain-page'>
      <table className='parachain-table'>
        <tbody>
          <tr>
            <th>Parachain Id</th>
            <th>Name</th>
            <th>Lease Periods</th>
            <th>Deposit</th>
          </tr>
          {parachains.map((p) => {
            return (
              <tr>
                <td>{p.paraId}</td>
                <td>{p.name}</td>
                <td>{p.leasePeriods[0].periodIndex + ' - ' + p.leasePeriods[p.leasePeriods.length - 1].periodIndex}</td>
                <td>
                  {p.leasePeriods[0].deposit} {relayChain.unit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
