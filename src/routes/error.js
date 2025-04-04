/*
 * @license
 * Copyright 2025 Designø Group ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */

/**
 * 
 * @brief Error handling middleware
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const errorHandler = (err, req, res, next) => {
    "use strict";
    let status = 500;
    let error = {
        error: 'Internal error',
    };

    // don't cache error responses
    res.set('Cache-Control', 'no-store');
    res.status(status);
    
    return res.json(error);
   /*  
    res.render("error-template", {
        error: err
    }); 
    */
};

// module.exports = { errorHandler };