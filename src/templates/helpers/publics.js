module.exports.batchPublics = {
    oldStateRootPos: 0,
    oldBatchAccInputHashPos: 8,
    oldBatchNumPos: 16,
    chainIdPos: 17,
    forkIdPos: 18,
    newStateRootPos: 19,
    newBatchAccInputHashPos: 27,
    newLocalExitRootPos: 35,
    newBatchNumPos: 43,
    nPublics: 44,
};

// ####################### PUBLICS FEIJOA #######################

module.exports.batchPublicsEip4844 = {
    oldStateRootPos: 0,
    oldBatchAccInputHashPos: 8,
    previousL1InfoTreeRootPos: 16,
    previousL1InfoTreeIndexPos: 24,
    chainIdPos: 25,
    forkIdPos: 26,
    newStateRootPos: 27,
    newBatchAccInputHashPos: 35,
    currentL1InfoTreeRootPos: 43,
    currentL1InfoTreeIndexPos: 51,
    newLocalExitRootPos: 52,
    newLastTimestampPos: 60,
    nPublics: 61,
};

module.exports.blobInnerPublics = {
    oldBlobStateRootPos: 0,
    oldBlobAccInputHashPos: 8,
    oldBlobNumPos: 16,
    oldStateRootPos: 17,
    forkIdPos: 25,
    newBlobStateRootPos: 26,
    newBlobAccInputHashPos: 34,
    newBlobNumPos: 42,
    finalAccBatchHashDataPos: 43,
    localExitRootFromBlobPos: 51,
    isInvalidPos: 59,
    timestampLimitPos: 60,
    lastL1InfoTreeRootPos: 61,
    lastL1InfoTreeIndexPos: 69,
    nPublics: 70,
};

module.exports.blobOuterPublics = {
    oldStateRootPos: 0,
    oldBlobStateRootPos: 8,
    oldBlobAccInputHashPos: 16,
    oldBlobNumPos: 24,
    chainIdPos: 25,
    forkIdPos: 26,
    newStateRootPos: 27,
    newBlobStateRootPos: 35,
    newBlobAccInputHashPos: 43,
    newBlobNumPos: 51,
    newLocalExitRootPos: 52,
    nPublics: 60,
};