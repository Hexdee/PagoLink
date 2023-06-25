import { BanCircleIcon, Table, TickCircleIcon, WarningSignIcon } from "evergreen-ui";
import { TableColumn, Tablecontent } from "../../utils/constant";

export const TableFormat = () => (
    <Table>
  <Table.Head>
    {TableColumn.map((head) => (
        <Table.TextHeaderCell key={head}>{head}</Table.TextHeaderCell>
    ))}
  </Table.Head>
  <Table.Body height="70vh">
    {Tablecontent.map((content) => (
      <Table.Row key={content.trx} isSelectable onSelect={() => alert(content.trx)}>
        <Table.TextCell>{content.trx}</Table.TextCell>
        <Table.TextCell>{content.description}</Table.TextCell>
        <Table.TextCell>{content.amount}</Table.TextCell>
        <Table.TextCell>{content.date}</Table.TextCell>
        <Table.TextCell>
            <div className="flex">
                {content.status === 'Success' ? (<TickCircleIcon color="success" marginRight={16} />) : content.status === 'Pending' ? (<WarningSignIcon color="warning" marginRight={16} />) : ( <BanCircleIcon color="danger" marginRight={16} />)}
            
                {content.status}
            </div>
            </Table.TextCell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
);