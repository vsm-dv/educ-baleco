import { Toolbar, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';

function createData(name: string, value: number | null) {
  return { name, value };
}

export function TableToolbar(props: { title: string }) {
  return (
    <Toolbar sx={{ backgroundColor: '#acacac' }}>
      <Typography sx={{ flex: '1 1 100%', fontWeight: '500' }} color="inherit" variant="subtitle1" component="div">
        {props.title}
      </Typography>
    </Toolbar>
  );
}

export function TetraPakTable() {
  const [units, setUnits] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bauxite, setBauxite] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [trees, setTrees] = useState(0);
  const [carbonDioxide, setCarbonDioxide] = useState(0);
  const [aluminium, setAluminium] = useState(0);
  const [paper, setPaper] = useState(0);
  const [plastic, setPlastic] = useState(0);

  useEffect(() => {
    const weightFormula = Number(((units * 28) / 1000).toFixed(2));
    setWeight(weightFormula);

    const aluminiumAndPaperFormula = Number(((weight * 16.67) / 100).toFixed(2));
    setAluminium(aluminiumAndPaperFormula);
    setPaper(aluminiumAndPaperFormula);

    const plasticFormula = Number(((weight * 66.66) / 100).toFixed(2));
    setPlastic(plasticFormula);

    const bauxiteFormula = Number((aluminiumAndPaperFormula * 5).toFixed(2));
    setBauxite(bauxiteFormula);

    const energyFormula = Number((aluminium * 16.85 + paper * 1.7).toFixed(2));
    setEnergy(energyFormula);

    const treesFormula = Number((paper / 5).toFixed(2));
    setTrees(treesFormula);

    const carbonDioxideFormula = (aluminium * 5.3 * 70) / 100 + (paper * 296) / 1000;
    setCarbonDioxide(Number(carbonDioxideFormula.toFixed(2)));
  }, [units, weight, aluminium, paper]);

  const rows = [
    createData('Unidade', 0),
    createData('Peso', weight),
    createData('Bauxita (kg)', bauxite),
    createData('-', null),
    createData('Energia (kw)', energy),
    createData('Árvores', trees),
    createData('CO² (kg)', carbonDioxide),
    createData('Alumínio', aluminium),
    createData('Papel (kg)', paper),
    createData('Plástico (kg)', plastic),
  ];

  return (
    <TableContainer component={Paper} sx={{ minWidth: '200px', maxWidth: '45%', border: '1px solid black', backgroundColor: '#acacac' }}>
      <TableToolbar title={'TetraPak'} />
      <Table aria-label="table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ backgroundColor: '#d3d3d3' }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.name !== 'Unidade' ? row.value : <input type="text" onChange={(event) => setUnits(Number(event.target.value))} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
