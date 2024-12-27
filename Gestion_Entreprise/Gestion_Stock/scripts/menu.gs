/***************************************
 * MENU PERSONNALISÉ
 ***************************************/
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Gestion Stocks")
    .addItem("1. Vérifier les seuils", "checkThresholdsDaily")
    .addItem("2. Mettre à jour statuts et couleurs", "updateStatusAndColors")
    .addSeparator()
    .addItem("3. Envoyer le bon de commande", "sendBonCommande")
    .addItem("4. Générer le rapport mensuel", "createMonthlyReport")
    .addItem("5. Envoyer manuellement le rapport mensuel", "sendMonthlyReportManually")
    .addItem("6. Générer le rapport trimestriel", "createQuarterlyReport")
    .addItem("7. Envoyer manuellement le rapport trimestriel", "sendQuarterlyReportManually") 
    .addSeparator()
    .addItem("8. Synchroniser toutes les données", "synchronizeAll")
    .addToUi();
}