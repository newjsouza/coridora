#!/usr/bin/env node
require('dotenv').config();

const { updateAllData } = require('../lib/dataUpdater');

(async () => {
  try {
    const results = await updateAllData();
    console.log('Atualização concluída com sucesso:');
    results.forEach((result) => {
      console.log(`- ${result.name}: ${result.bytesWritten} bytes -> ${result.output}`);
    });
    process.exit(0);
  } catch (error) {
    console.error('Falha ao atualizar os dados das ligas.');
    console.error(error.message);
    process.exit(1);
  }
})();
