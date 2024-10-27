---
title: "Continuous Variational Quantum Algorithms for Time Series"
collection: publications
category: manuscripts
permalink: /publication/2023-06-18-continuous-vqa
#excerpt: 'This paper is about the number 2. The number 3 is left for future work.'
date: 2023-06-18
venue: '2023 International Joint Conference on Neural Networks (IJCNN) (pp. 01-08). IEEE.'
#slidesurl: 'http://academicpages.github.io/files/slides2.pdf'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/10191609'
citation: 'Guo, M., Weng, Y., Ye, L., & Lai, Y. C. (2023, June). Continuous variational quantum algorithms for time series. In 2023 International Joint Conference on Neural Networks (IJCNN) (pp. 01-08). IEEE.'
---

Variational quantum algorithms (VQAs) are the leading algorithm for achieving quantum advantage using near-term quantum computers. VQAs use parameterized quantum circuits for inference, and the variational parameters in quantum circuits can be trained using a classical optimizer. The parameters are trained to guide how the quantum bits evolve and make the final measurements closely match the ground truth. However, this way of learning from raw data makes it difficult to capture the underlying dynamic information in the data, especially for time series data. To address this limitation, we proposed continuous variational quantum algorithms (CVQAs) for time series in this paper. CVQAs use quantum variational circuits to parameterize the dynamics of time series, thus they can learn the dynamic information behind the data. After the dynamics are trained, the prediction results will be obtained by a differential equation solver working on the dynamics. Since we aim to model the dynamics of data instead of the data itself, the quantum circuit in our approach will need fewer qubits and variational gates. To evaluate our proposed approach, we compare our model with baseline models on several weather time series. Experimental results prove that our approach has better or equivalent results but with fewer qubits and variational gates compared to baseline models.
