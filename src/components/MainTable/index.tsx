import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { TableToolbar } from '../TetraPakTable';
import './style.css';

function createData(material: string, name: string, count: number, weight: number, bauxite: number, energy: number, trees: number, carbon: number, water: number, sand: number, oil: number) {
  return { material, name, count, weight, bauxite, energy, trees, carbon, water, sand, oil };
}

export default function MainTable() {
  const [cansCount, setCansCount] = useState(0);
  const [cansWeight, setCansWeight] = useState(0);

  const [petBottlesCount, setPetBottlesCount] = useState(0);
  const [petBottlesWeight, setPetBottlesWeight] = useState(0);

  const [paperCount, setPaperCount] = useState(0);
  const [paperWeight, setPaperWeight] = useState(0);

  const [glassCount, setGlassCount] = useState(0);
  const [glassWeight, setGlassWeight] = useState(0);

  const [tetraPakCount, setTetraPakCount] = useState(0);
  const [tetraPakWeight, setTetraPakWeight] = useState(0);

  const [totalCount, setTotalCount] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  const [plasticWeight, setPlasticWeight] = useState(0);
  const [aluminiumAndPaperWeight, setAluminiumAndPaperWeight] = useState(0);

  const [petWeightBauxite, setPetWeightBauxite] = useState(0);
  const [glassWeightBauxite, setGlassWeightBauxite] = useState(0);
  const [tetraPakWeightBauxite, setTetraPakWeightBauxite] = useState(0);
  const [plasticWeightBauxite, setPlasticWeightBauxite] = useState(0);
  const [paperWeightBauxite, setPaperWeightBauxite] = useState(0);
  const [bauxiteTotal, setBauxiteTotal] = useState(0);

  const [cansWeightEnergy, setCansWeightEnergy] = useState(0);
  const [paperWeightEnergy, setPaperWeightEnergy] = useState(0);
  const [tetraPakSumEnergy, setTetraPakSumEnergy] = useState(0);
  const [aluminiumWeightEnergy, setAluminiumWeightEnergy] = useState(0);
  const [lastPaperWeightEnergy, setLastPaperWeightEnergy] = useState(0);
  const [energyTotal, setEnergyTotal] = useState(0);

  const [cansWeightTrees, setCansWeightTrees] = useState(0);
  const [petWeightTrees, setPetWeightTrees] = useState(0);
  const [paperWeightTrees, setPaperWeightTrees] = useState(0);
  const [glassWeightTrees, setGlassWeightTrees] = useState(0);
  const [tetraPakWeightTrees, setTetraPakWeightTrees] = useState(0);
  const [plasticWeightTrees, setPlasticWeightTrees] = useState(0);
  const [aluminiumWeightTrees, setAluminiumWeightTrees] = useState(0);
  const [lastPaperWeightTrees, setLastPaperWeightTrees] = useState(0);
  const [treesTotal, setTreesTotal] = useState(0);

  const [cansWeightCarbonDioxide, setCansWeightCarbonDioxide] = useState(0);
  const [paperWeightCarbonDioxide, setPaperWeightCarbonDioxide] = useState(0);
  const [glassWeightCarbonDioxide, setGlassWeightCarbonDioxide] = useState(0);
  const [tetraPakSumCarbonDioxide, setTetraPakSumCarbonDioxide] = useState(0);
  const [aluminiumWeightCarbonDioxide, setAluminiumWeightCarbonDioxide] = useState(0);
  const [lastPaperWeightCarbonDioxide, setLastPaperWeightCarbonDioxide] = useState(0);
  const [carbonDioxideTotal, setCarbonDioxideTotal] = useState(0);

  const [waterCans, setWaterCans] = useState(0);
  const [petWeightWater, setPetWeightWater] = useState(0);
  const [paperWeightWater, setPaperWeightWater] = useState(0);
  const [waterGlass, setWaterGlass] = useState(0);
  const [tetraPakSumWater, setTetraPakSumWater] = useState(0);
  const [plasticWeightWater, setPlasticWeightWater] = useState(0);
  const [lastPaperWeightWater, setLastPaperWeightWater] = useState(0);
  const [waterTotal, setWaterTotal] = useState(0);

  const [cansWeightSand, setCansWeightSand] = useState(0);
  const [petWeightSand, setPetWeightSand] = useState(0);
  const [glassWeightSand, setGlassWeightSand] = useState(0);
  const [tetraPakSumSand, setTetraPakSumSand] = useState(0);
  const [plasticWeightSand, setPlasticWeightSand] = useState(0);
  const [aluminiumWeightSand, setAluminiumWeightSand] = useState(0);
  const [lastPaperWeightSand, setLastPaperWeightSand] = useState(0);
  const [sandTotal, setSandTotal] = useState(0);

  const [cansWeightOil, setCansWeightOil] = useState(0);
  const [petWeightOil, setPetWeightOil] = useState(0);
  const [glassWeightOil, setGlassWeightOil] = useState(0);
  const [tetraPakSumOil, setTetraPakSumOil] = useState(0);
  const [plasticWeightOil, setPlasticWeightOil] = useState(0);
  const [aluminiumWeightOil, setAluminiumWeightOil] = useState(0);
  const [lastPaperWeightOil, setLastPaperWeightOil] = useState(0);
  const [oilTotal, setOilTotal] = useState(0);

  useEffect(() => {
    if (tetraPakCount === 0) {
      setTetraPakWeight(0);
    }

    const tetraPakWeightFormula = Number(((tetraPakCount * 28) / 1000).toFixed(2));
    setTetraPakWeight(tetraPakWeightFormula);

    const plasticWeightFormula = Number(((tetraPakWeight * 66.66) / 100).toFixed(2));
    setPlasticWeight(plasticWeightFormula);

    const aluminiumAndPaperWeightFormula = Number(((tetraPakWeight * 16.67) / 100).toFixed(2));
    setAluminiumAndPaperWeight(aluminiumAndPaperWeightFormula);

    setPetWeightBauxite(petBottlesWeight * 0);
    setGlassWeightBauxite(glassWeight * 0);

    const tetraPakWeightBauxiteFormula = Number(((tetraPakWeight * 16.67 * 4) / 100).toFixed(2));
    setTetraPakWeightBauxite(tetraPakWeightBauxiteFormula);

    setPlasticWeightBauxite(plasticWeight * 0);
    setPaperWeightBauxite(aluminiumAndPaperWeight * 0);

    const cansWeightEnergyFormula = Number((cansWeight * 16.85).toFixed(2));
    setCansWeightEnergy(cansWeightEnergyFormula);

    const paperWeightEnergyFormula = Number((paperWeight * 1.7).toFixed(2));
    setPaperWeightEnergy(paperWeightEnergyFormula);

    const aluminiumWeightEnergyFormula = Number(((aluminiumAndPaperWeight * 16850) / 1000).toFixed(2));
    setAluminiumWeightEnergy(aluminiumWeightEnergyFormula);

    const lastPapermWeightEnergyFormula = Number(((aluminiumAndPaperWeight * 1700) / 1000).toFixed(2));
    setLastPaperWeightEnergy(lastPapermWeightEnergyFormula);

    const tetraPakWeightEnergySum = Number((aluminiumWeightEnergy + lastPaperWeightEnergy).toFixed(2));
    setTetraPakSumEnergy(tetraPakWeightEnergySum);

    const cansWeightTreesFormula = cansWeight * 0;
    setCansWeightTrees(cansWeightTreesFormula);

    const petWeightTreesFormula = petBottlesWeight * 0;
    setPetWeightTrees(petWeightTreesFormula);

    const paperWeightTreesFormula = Number((paperWeight / 5).toFixed(2));
    setPaperWeightTrees(paperWeightTreesFormula);

    const glassWeightTreesFormula = glassWeight * 0;
    setGlassWeightTrees(glassWeightTreesFormula);

    const tetraPakWeightTreesFormula = Number(((tetraPakWeight * 16.67) / 500).toFixed(2));
    setTetraPakWeightTrees(tetraPakWeightTreesFormula);

    const plasticWeightTreesFormula = plasticWeight * 0;
    setPlasticWeightTrees(plasticWeightTreesFormula);

    const aluminiumWeightTreesFormula = aluminiumAndPaperWeight * 0;
    setAluminiumWeightTrees(aluminiumWeightTreesFormula);

    const lastPaperWeightTreesFormula = Number((aluminiumAndPaperWeight / 5).toFixed(2));
    setLastPaperWeightTrees(lastPaperWeightTreesFormula);

    const cansWeightCarbonDioxideFormula = Number(((cansWeight * 5.3 * 70) / 100).toFixed(2));
    setCansWeightCarbonDioxide(cansWeightCarbonDioxideFormula);

    const paperWeightCarbonDioxideFormula = Number((paperWeight * 1.7).toFixed(2));
    setPaperWeightCarbonDioxide(paperWeightCarbonDioxideFormula);

    const glassWeightCarbonDioxideFormula = glassWeight * 0;
    setGlassWeightCarbonDioxide(glassWeightCarbonDioxideFormula);

    const aluminiumWeightCarbonDioxideFormula = Number(((aluminiumAndPaperWeight * 296) / 1000).toFixed(2));
    setAluminiumWeightCarbonDioxide(aluminiumWeightCarbonDioxideFormula);

    const lastPaperWeightCarbonDioxideFormula = Number(((aluminiumAndPaperWeight * 1700) / 1000).toFixed(2));
    setLastPaperWeightCarbonDioxide(lastPaperWeightCarbonDioxideFormula);

    const tetraPakSumCarbonDioxideFormula = Number((aluminiumWeightCarbonDioxide + lastPaperWeightCarbonDioxide).toFixed(2));
    setTetraPakSumCarbonDioxide(tetraPakSumCarbonDioxideFormula);

    const petWeightWaterFormula = Number((petBottlesWeight * 180).toFixed(2));
    setPetWeightWater(petWeightWaterFormula);

    const paperWeightWaterFormula = Number((paperWeight * 20).toFixed(2));
    setPaperWeightWater(paperWeightWaterFormula);

    const plasticWeightWaterFormula = Number((plasticWeight * 180).toFixed(2));
    setPlasticWeightWater(plasticWeightWaterFormula);

    const lastPaperWeightWaterFormula = Number((aluminiumAndPaperWeight * 20).toFixed(2));
    setLastPaperWeightWater(lastPaperWeightWaterFormula);

    const tetraPakSumWaterFormula = Number((plasticWeightWater + 0 + lastPaperWeightWater).toFixed(2));
    setTetraPakSumWater(tetraPakSumWaterFormula);

    const cansWeightSandFormula = cansWeight * 0;
    setCansWeightSand(cansWeightSandFormula);

    const petWeightSandFormula = petBottlesWeight * 0;
    setPetWeightSand(petWeightSandFormula);

    const glassWeightSandFormula = Number((glassWeight * 1.3).toFixed(2));
    setGlassWeightSand(glassWeightSandFormula);

    const plasticWeightSandFormula = plasticWeight * 0;
    setPlasticWeightSand(plasticWeightSandFormula);

    const aluminiumWeightSandFormula = aluminiumAndPaperWeight * 0;
    setAluminiumWeightSand(aluminiumWeightSandFormula);

    const lastPaperWeightSandFormula = aluminiumAndPaperWeight * 0;
    setLastPaperWeightSand(lastPaperWeightSandFormula);

    const tetraPakSumSandFormula = plasticWeightSand + aluminiumWeightSand + lastPaperWeightSand;
    setTetraPakSumSand(tetraPakSumSandFormula);

    const cansWeightOilFormula = cansWeight * 0;
    setCansWeightOil(cansWeightOilFormula);

    const petWeightOilFormula = petBottlesWeight * 1;
    setPetWeightOil(petWeightOilFormula);

    const glassWeightOilFormula = glassWeight * 0;
    setGlassWeightOil(glassWeightOilFormula);

    const plasticWeightOilFormula = plasticWeight * 1;
    setPlasticWeightOil(plasticWeightOilFormula);

    const aluminiumWeightOilFormula = aluminiumAndPaperWeight * 0;
    setAluminiumWeightOil(aluminiumWeightOilFormula);

    const lastPaperWeightOilFormula = aluminiumAndPaperWeight * 0;
    setLastPaperWeightOil(lastPaperWeightOilFormula);

    const tetraPakSumOilFormula = plasticWeightOil + aluminiumWeightOil + lastPaperWeightOil;
    setTetraPakSumOil(tetraPakSumOilFormula);

    const countSum = cansCount + petBottlesCount + paperCount + glassCount + tetraPakCount;
    const weightSum = cansWeight + petBottlesWeight + paperWeight + glassWeight + tetraPakWeight;
    const bauxiteSum = petWeightBauxite + glassWeightBauxite + tetraPakWeightBauxite + plasticWeightBauxite + paperWeightBauxite;
    const energySum = cansWeightEnergy + paperWeightEnergy + 0 + tetraPakSumEnergy;
    const treesSum = cansWeightTrees + petWeightTrees + paperWeightTrees + glassWeightTrees + tetraPakWeightTrees;

    const carbonDioxideSum = cansWeightCarbonDioxide + paperWeightCarbonDioxide + glassWeightCarbonDioxide + tetraPakSumCarbonDioxide;
    const waterSum = waterCans + waterGlass + petWeightWater + paperWeightWater + tetraPakSumWater;
    const sandSum = cansWeightSand + petWeightSand + glassWeightSand + tetraPakSumSand;
    const oilSum = cansWeightOil + petWeightOil + 0 + glassWeightOil + tetraPakSumOil;

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
    paperCount,
    glassCount,
    tetraPakCount,
    cansWeight,
    petBottlesWeight,
    paperWeight,
    glassWeight,
    tetraPakWeight,
    plasticWeight,
    aluminiumAndPaperWeight,
    petWeightBauxite,
    glassWeightBauxite,
    tetraPakWeightBauxite,
    plasticWeightBauxite,
    paperWeightBauxite,
    cansWeightEnergy,
    paperWeightEnergy,
    tetraPakSumEnergy,
    aluminiumWeightEnergy,
    lastPaperWeightEnergy,
    cansWeightTrees,
    petWeightTrees,
    paperWeightTrees,
    glassWeightTrees,
    tetraPakWeightTrees,
    plasticWeightTrees,
    aluminiumWeightTrees,
    lastPaperWeightTrees,
    cansWeightCarbonDioxide,
    paperWeightCarbonDioxide,
    glassWeightCarbonDioxide,
    aluminiumWeightCarbonDioxide,
    lastPaperWeightCarbonDioxide,
    tetraPakSumCarbonDioxide,
    waterCans,
    waterGlass,
    petWeightWater,
    paperWeightWater,
    plasticWeightWater,
    lastPaperWeightWater,
    tetraPakSumWater,
    cansWeightSand,
    petWeightSand,
    glassWeightSand,
    plasticWeightSand,
    aluminiumWeightSand,
    lastPaperWeightSand,
    tetraPakSumSand,
    cansWeightOil,
    petWeightOil,
    glassWeightOil,
    plasticWeightOil,
    aluminiumWeightOil,
    lastPaperWeightOil,
    tetraPakSumOil,
  ]);

  function setInputValue(column: string, material: string, value: string) {
    const numberValue = Number(value);

    if (material === 'cans') {
      return column === 'count' ? setCansCount(numberValue) : column === 'weight' ? setCansWeight(numberValue) : setWaterCans(numberValue);
    }

    if (material === 'bottles') {
      return column === 'count' ? setPetBottlesCount(numberValue) : setPetBottlesWeight(numberValue);
    }

    if (material === 'paper') {
      return column === 'count' ? setPaperCount(numberValue) : setPaperWeight(numberValue);
    }

    if (material === 'glass') {
      return column === 'count' ? setGlassCount(numberValue) : column === 'weight' ? setGlassWeight(numberValue) : setWaterGlass(numberValue);
    }

    if (material === 'tetraPak') {
      return setTetraPakCount(numberValue);
    }
  }

  const noInput = ['plastic', 'aluminium', 'lastPaper'];

  const rows = [
    createData('cans', 'Latas de Alumínio', 0, 0, 0, cansWeightEnergy, cansWeightTrees, cansWeightCarbonDioxide, 0, cansWeightSand, cansWeightOil),
    createData('bottles', 'Garrafa PET', 0, 0, petWeightBauxite, 0, petWeightTrees, 0, petWeightWater, petWeightSand, petWeightOil),
    createData('paper', 'Papel', 0, 0, 0, paperWeightEnergy, paperWeightTrees, paperWeightCarbonDioxide, paperWeightWater, 0, 0),
    createData('glass', 'Vidro', 0, 0, glassWeightBauxite, 0, glassWeightTrees, glassWeightCarbonDioxide, 0, glassWeightSand, glassWeightOil),
    createData('tetraPak', 'Tetrapak', 0, tetraPakWeight, tetraPakWeightBauxite, tetraPakSumEnergy, tetraPakWeightTrees, tetraPakSumCarbonDioxide, tetraPakSumWater, tetraPakSumSand, tetraPakSumOil),
    createData('plastic', 'Plástico', 0, plasticWeight, plasticWeightBauxite, 0, plasticWeightTrees, 0, plasticWeightWater, plasticWeightSand, plasticWeightOil),
    createData('aluminium', 'Alumínio', 0, aluminiumAndPaperWeight, 0, aluminiumWeightEnergy, aluminiumWeightTrees, aluminiumWeightCarbonDioxide, 0, aluminiumWeightSand, aluminiumWeightOil),
    createData(
      'lastPaper',
      'Papel',
      0,
      aluminiumAndPaperWeight,
      paperWeightBauxite,
      lastPaperWeightEnergy,
      lastPaperWeightTrees,
      lastPaperWeightCarbonDioxide,
      lastPaperWeightWater,
      lastPaperWeightSand,
      lastPaperWeightOil
    ),
    createData('total', 'Total', totalCount, totalWeight, bauxiteTotal, energyTotal, treesTotal, carbonDioxideTotal, waterTotal, sandTotal, oilTotal),
  ];

  return (
    <TableContainer component={Paper} style={{ border: '1px solid black', backgroundColor: '#acacac' }}>
      <TableToolbar title={'Balanço ecológico tabela base'} />
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#d3d3d3' }}>
          <TableRow>
            <TableCell>Material</TableCell>
            <TableCell>Unidades</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell align="right">Bauxita</TableCell>
            <TableCell align="right">Energia (kw)</TableCell>
            <TableCell align="right">Árvores</TableCell>
            <TableCell align="right">CO²</TableCell>
            <TableCell align="right">Água (L)</TableCell>
            <TableCell align="right">Areia</TableCell>
            <TableCell align="right">Petróleo (kg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              style={{ backgroundColor: `${row.material === 'tetraPak' ? '#f0f0f0' : !noInput.includes(row.material) ? '#d3d3d3' : '#fafafa'}` }}
              key={row.material}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.material === 'total' ? (
                  row.count
                ) : noInput.includes(row.material) ? (
                  '-'
                ) : (
                  <input type="number" name={`${row.material}-count`} id="" onChange={(event) => setInputValue('count', row.material, event.target.value)} />
                )}
              </TableCell>
              <TableCell align="right">
                {[...noInput, 'tetraPak', 'total'].includes(row.material) ? (
                  row.weight
                ) : (
                  <input type="number" name={`${row.material}-weight`} id="" onChange={(event) => setInputValue('weight', row.material, event.target.value)} />
                )}
              </TableCell>
              <TableCell align="right">{row.bauxite}</TableCell>
              <TableCell align="right">{row.energy}</TableCell>
              <TableCell align="right">{row.trees}</TableCell>
              <TableCell align="right">{row.carbon}</TableCell>
              <TableCell align="right">
                {!['cans', 'glass'].includes(row.material) ? (
                  row.water
                ) : (
                  <input type="number" name={`${row.material}-water`} id="" onChange={(event) => setInputValue('water', row.material, event.target.value)} />
                )}
              </TableCell>
              <TableCell align="right">{row.sand}</TableCell>
              <TableCell align="right">{row.oil}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
