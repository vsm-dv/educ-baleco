import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import './style.css';
import { Toolbar, Typography } from '@mui/material';
import logo from '../../assets/logo.png';

function createData(
  material: string,
  name: string,
  count: number,
  weight: number,
  bauxite: number,
  energy: number | null,
  trees: number | null,
  carbon: number | null,
  water: number | null,
  sand: number | null,
  oil: number | null
) {
  return { material, name, count, weight, bauxite, energy, trees, carbon, water, sand, oil };
}

export function TableToolbar(props: { title: string }) {
  return (
    <Toolbar sx={{ backgroundColor: '#a2a2a2', borderBottom: '1px solid #d3d3d3' }}>
      <Typography sx={{ flex: '1 1 100%', fontWeight: '500' }} color="inherit" variant="subtitle1" component="div">
        {props.title}
      </Typography>
    </Toolbar>
  );
}

export default function MainTable() {
  const [cansCount, setCansCount] = useState(0);
  const [cansWeight, setCansWeight] = useState(0);

  const [petBottlesCount, setPetBottlesCount] = useState(0);
  const [petBottlesWeight, setPetBottlesWeight] = useState(0);

  const [paperWeight, setPaperWeight] = useState(0);
  const [glassWeight, setGlassWeight] = useState(0);

  const [totalCount, setTotalCount] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  const [cansWeightBauxite, setCansWeightBauxite] = useState(0);
  const [bauxiteTotal, setBauxiteTotal] = useState(0);

  const [cansWeightEnergy, setCansWeightEnergy] = useState(0);
  const [paperWeightEnergy, setPaperWeightEnergy] = useState(0);
  const [energyTotal, setEnergyTotal] = useState(0);

  const [paperWeightTrees, setPaperWeightTrees] = useState(0);
  const [treesTotal, setTreesTotal] = useState(0);

  const [cansWeightCarbonDioxide, setCansWeightCarbonDioxide] = useState(0);
  const [petWeightCarbonDioxide, setPetWeightCarbonDioxide] = useState(0);
  const [paperWeightCarbonDioxide, setPaperWeightCarbonDioxide] = useState(0);
  const [carbonDioxideTotal, setCarbonDioxideTotal] = useState(0);

  const [petWeightWater, setPetWeightWater] = useState(0);
  const [paperWeightWater, setPaperWeightWater] = useState(0);
  const [waterTotal, setWaterTotal] = useState(0);

  const [glassWeightSand, setGlassWeightSand] = useState(0);
  const [sandTotal, setSandTotal] = useState(0);

  const [petWeightOil, setPetWeightOil] = useState(0);
  const [glassWeightOil, setGlassWeightOil] = useState(0);
  const [oilTotal, setOilTotal] = useState(0);

  useEffect(() => {
    const cansWeightFormula = cansCount * 0.0145;
    setCansWeight(cansWeightFormula);

    const petWeightFormula = petBottlesCount * 0.047;
    setPetBottlesWeight(petWeightFormula);

    const cansWeightBauxiteFormula = cansWeight * 4;
    setCansWeightBauxite(cansWeightBauxiteFormula);

    const cansWeightEnergyFormula = cansWeight * 16.85;
    setCansWeightEnergy(cansWeightEnergyFormula);

    const paperWeightEnergyFormula = paperWeight * 1.7;
    setPaperWeightEnergy(paperWeightEnergyFormula);

    const paperWeightTreesFormula = paperWeight / 5;
    setPaperWeightTrees(paperWeightTreesFormula);

    const cansWeightCarbonDioxideFormula = (cansWeight * 5.3 * 70) / 100;
    setCansWeightCarbonDioxide(cansWeightCarbonDioxideFormula);

    const petWeightCarbonDioxideFormula = petBottlesWeight * 0.46;
    setPetWeightCarbonDioxide(petWeightCarbonDioxideFormula);

    const paperWeightCarbonDioxideFormula = paperWeight * 1.7;
    setPaperWeightCarbonDioxide(paperWeightCarbonDioxideFormula);

    const petWeightWaterFormula = petBottlesWeight * 180;
    setPetWeightWater(petWeightWaterFormula);

    const paperWeightWaterFormula = paperWeight * 20;
    setPaperWeightWater(paperWeightWaterFormula);

    const glassWeightSandFormula = glassWeight * 1.3;
    setGlassWeightSand(glassWeightSandFormula);

    const petWeightOilFormula = petBottlesWeight;
    setPetWeightOil(petWeightOilFormula);

    const glassWeightOilFormula = glassWeight * 0;
    setGlassWeightOil(glassWeightOilFormula);

    const countSum = cansCount + petBottlesCount;
    const weightSum = cansWeight + petBottlesWeight + paperWeight + glassWeight;
    const bauxiteSum = cansWeightBauxite;
    const energySum = cansWeightEnergy + paperWeightEnergy;
    const treesSum = paperWeightTrees;

    const carbonDioxideSum = cansWeightCarbonDioxide + petWeightCarbonDioxide + paperWeightCarbonDioxide;
    const waterSum = petWeightWater + paperWeightWater;
    const sandSum = glassWeightSand;
    const oilSum = petWeightOil + 0 + glassWeightOil;

    setTotalCount(Number(countSum.toFixed(2)));
    setTotalWeight(Number(weightSum.toFixed(2)));
    setBauxiteTotal(Number(bauxiteSum.toFixed(2)));
    setEnergyTotal(Number(energySum.toFixed(2)));
    setTreesTotal(Number(treesSum.toFixed(2)));
    setCarbonDioxideTotal(Number(carbonDioxideSum.toFixed(2)));
    setWaterTotal(Number(waterSum.toFixed(2)));
    setSandTotal(Number(sandSum.toFixed(2)));
    setOilTotal(Number(oilSum.toFixed(2)));
  }, [
    cansCount,
    petBottlesCount,
    cansWeight,
    petBottlesWeight,
    paperWeight,
    glassWeight,
    cansWeightEnergy,
    paperWeightEnergy,
    paperWeightTrees,
    cansWeightCarbonDioxide,
    paperWeightCarbonDioxide,
    petWeightWater,
    paperWeightWater,
    glassWeightSand,
    petWeightOil,
    glassWeightOil,
  ]);

  function setInputValue(material: string, value: string) {
    const numberValue = Number(value.replace(/,/g, '.'));
    console.log(numberValue);

    if (material === 'cans') {
      return setCansCount(numberValue);
    }

    if (material === 'bottles') {
      return setPetBottlesCount(numberValue);
    }

    if (material === 'paper') {
      return setPaperWeight(numberValue);
    }

    if (material === 'glass') {
      return setGlassWeight(numberValue);
    }
  }

  const noUnitInput = ['paper', 'glass'];
  const noWeightInput = ['cans', 'bottles'];

  const rows = [
    createData('cans', 'Latas de Alumínio', 0, cansWeight, cansWeightBauxite, cansWeightEnergy, null, cansWeightCarbonDioxide, null, null, null),
    createData('bottles', 'Garrafa PET', 0, petBottlesWeight, 0, null, null, petWeightCarbonDioxide, petWeightWater, null, petWeightOil),
    createData('paper', 'Papel', 0, 0, 0, paperWeightEnergy, paperWeightTrees, paperWeightCarbonDioxide, paperWeightWater, null, null),
    createData('glass', 'Vidro', 0, 0, 0, null, 0, null, null, glassWeightSand, null),
    createData('total', 'Total', totalCount, totalWeight, bauxiteTotal, energyTotal, treesTotal, carbonDioxideTotal, waterTotal, sandTotal, oilTotal),
  ];

  return (
    <>
      <TableContainer component={Paper} style={{ border: '1px solid black', backgroundColor: '#a2a2a2' }}>
        <TableToolbar title={'Balanço ecológico tabela base'} />
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#a2a2a2' }}>
            <TableRow>
              <TableCell size="small" className="tableCell">
                Material
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                Unidades
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                Peso (kg)
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                Bauxita (kg)
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                Energia (kw)
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                Árvore (unidade)
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                CO² (kg)
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                Água (L)
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                Areia (kg)
              </TableCell>
              <TableCell size="small" className="tableCell" align="center">
                Petróleo (kg)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: `url(${logo})`, backgroundColor: '#d3d3d3', backgroundSize: '60%', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center' }}>
            {rows.map((row) => (
              <TableRow
                key={row.material}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  background: `${row.material === 'total' && '#acacac'}`,
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {row.material === 'total' ? (
                    row.count.toFixed(2)
                  ) : noUnitInput.includes(row.material) ? (
                    '-'
                  ) : (
                    <input
                      type="string"
                      name={`${row.material}-count`}
                      onChange={(event) =>
                        !isNaN(Number(event.target.value.replace(',', '.'))) ? setInputValue(row.material, event.target.value) : setInputValue(row.material, (event.target.value = ''))
                      }
                    />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {[...noWeightInput, 'total'].includes(row.material) ? (
                    row.weight.toFixed(2)
                  ) : (
                    <input
                      type="string"
                      name={`${row.material}-weight`}
                      onChange={(event) =>
                        !isNaN(Number(event.target.value.replace(',', '.'))) ? setInputValue(row.material, event.target.value) : setInputValue(row.material, (event.target.value = ''))
                      }
                    />
                  )}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {row.bauxite === 0 ? row.bauxite : row.bauxite.toFixed(2)}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {row.energy?.toFixed(2) ?? '-'}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {(row.trees === 0 ? row.trees : row.trees?.toFixed(2)) ?? '-'}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {row.carbon?.toFixed(2) ?? '-'}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {row.water?.toFixed(2) ?? '-'}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {row.sand?.toFixed(2) ?? '-'}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: '500' }}>
                  {row.oil?.toFixed(2) ?? '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <span style={{ fontSize: '14px' }}>OBS: Devido às mudanças da indústria e nos processos de produção, alguns valores estão sendo atualizados constantemente</span>
    </>
  );
}
