/* ================================================================
   DATOS - FULLY EXPANDED CONTENT TREE (COMPLETE)
================================================================ */
// Types: 'root', 'topic', 'subtopic', 'info', 'code', 'list'

const NODES = [
    // --- ROOT ---
    { id: 'center', label: 'EIGRP', sub: 'Protocolo de Enrutamiento Avanzado', type: 'root', color: '#00e5c3', width: 160, height: 60, children: ['def', 'ipv4', 'ipv6', 'comp'], expanded: true },

    // =================================================================================================
    // 1. DEFINICIÓN Y CONCEPTOS
    // =================================================================================================
    { id: 'def', label: 'Definición y Conceptos', type: 'topic', color: '#00e5c3', width: 220, height: 50, children: ['def_gen', 'def_tables', 'def_comm', 'def_dual', 'def_neigh', 'def_update'], expanded: false, edgeLabel: 'Es un' },

    // General
    { id: 'def_gen', label: '¿Qué es EIGRP?', type: 'subtopic', width: 160, height: 40, children: ['dg_1', 'dg_2', 'dg_3'], parent: 'def' },
    { id: 'dg_1', label: 'IGP Propietario de Cisco', type: 'info', width: 180, height: 34, parent: 'def_gen' },
    { id: 'dg_2', label: 'Híbrido Avanzado\n(Link-State + Vector Distancia)', type: 'info', width: 240, height: 44, parent: 'def_gen' },
    { id: 'dg_3', label: 'Versiones: IPv4 y IPv6', type: 'info', width: 180, height: 34, parent: 'def_gen' },

    // Tablas
    { id: 'def_tables', label: '3 Tablas Principales', type: 'subtopic', width: 180, height: 40, children: ['dt_1', 'dt_2', 'dt_3'], parent: 'def' },
    { id: 'dt_1', label: '1. Tabla de Vecinos\n(Routers adyacentes activos)', type: 'info', width: 220, height: 44, parent: 'def_tables' },
    { id: 'dt_2', label: '2. Tabla de Topología\n(Todas las rutas aprendidas)', type: 'info', width: 220, height: 44, parent: 'def_tables' },
    { id: 'dt_3', label: '3. Tabla de Enrutamiento\n(Solo la mejor ruta - Sucesor)', type: 'info', width: 220, height: 44, parent: 'def_tables' },

    // Comunicación
    { id: 'def_comm', label: 'Comunicación', type: 'subtopic', width: 160, height: 40, children: ['dc_multi'], parent: 'def' },
    { id: 'dc_multi', label: 'Uso de Multicast', type: 'info', width: 160, height: 34, children: ['dc_v4', 'dc_v6'], parent: 'def_comm' },
    { id: 'dc_v4', label: 'IPv4: 224.0.0.10', type: 'code', width: 160, height: 30, parent: 'dc_multi' },
    { id: 'dc_v6', label: 'IPv6: FF02::A', type: 'code', width: 160, height: 30, parent: 'dc_multi' },

    // DUAL
    { id: 'def_dual', label: 'Algoritmo DUAL', type: 'subtopic', width: 160, height: 40, children: ['dd_func', 'dd_terms', 'dd_cond'], parent: 'def', edgeLabel: 'Usa' },
    { id: 'dd_func', label: 'Garantiza redes libres de bucles', type: 'info', width: 220, height: 34, parent: 'def_dual' },
    { id: 'dd_terms', label: 'Terminología', type: 'info', width: 120, height: 34, children: ['dd_suc', 'dd_fs', 'dd_fd', 'dd_rd'], parent: 'def_dual' },
    { id: 'dd_suc', label: 'Sucesor: Mejor ruta (en tabla routing)', type: 'info', width: 260, height: 34, parent: 'dd_terms' },
    { id: 'dd_fs', label: 'Sucesor Factible: Ruta de respaldo', type: 'info', width: 260, height: 34, parent: 'dd_terms' },
    { id: 'dd_fd', label: 'FD: Distancia Factible (Métrica total)', type: 'info', width: 260, height: 34, parent: 'dd_terms' },
    { id: 'dd_rd', label: 'RD: Distancia Reportada (por vecino)', type: 'info', width: 260, height: 34, parent: 'dd_terms' },
    { id: 'dd_cond', label: 'Condición de Factibilidad', type: 'info', width: 200, height: 34, children: ['dd_eq'], parent: 'def_dual' },
    { id: 'dd_eq', label: 'RD (del vecino) < FD (actual)', type: 'code', width: 240, height: 30, parent: 'dd_cond' },

    // Vecinos
    { id: 'def_neigh', label: 'Estados de Vecindad', type: 'subtopic', width: 180, height: 40, children: ['dn_hello', 'dn_req'], parent: 'def' },
    { id: 'dn_hello', label: 'Timers: Hello 5s / Hold 15s', type: 'info', width: 220, height: 34, parent: 'def_neigh' },
    { id: 'dn_req', label: 'Requisitos Adyacencia', type: 'info', width: 180, height: 34, children: ['dn_r1', 'dn_r2', 'dn_r3', 'dn_r4'], parent: 'def_neigh' },
    { id: 'dn_r1', label: '• Mismo AS Number', type: 'info', width: 160, height: 30, parent: 'dn_req' },
    { id: 'dn_r2', label: '• Mismos K-Values', type: 'info', width: 160, height: 30, parent: 'dn_req' },
    { id: 'dn_r3', label: '• Misma Subred (IPv4)', type: 'info', width: 180, height: 30, parent: 'dn_req' },
    { id: 'dn_r4', label: '• Autenticación (si hay)', type: 'info', width: 180, height: 30, parent: 'dn_req' },

    // Actualizaciones
    { id: 'def_update', label: 'Actualizaciones', type: 'subtopic', width: 160, height: 40, children: ['du_part', 'du_split', 'du_poison'], parent: 'def' },
    { id: 'du_part', label: 'Parciales y Limitadas\n(Solo cambios, solo a afectados)', type: 'info', width: 240, height: 44, parent: 'def_update' },
    { id: 'du_split', label: 'Horizonte Dividido\n(No devolver info por donde llegó)', type: 'info', width: 240, height: 44, parent: 'def_update' },
    { id: 'du_poison', label: 'Route Poisoning\n(Marcar inalcanzable con métrica infinita)', type: 'info', width: 260, height: 44, parent: 'def_update' },


    // =================================================================================================
    // 2. CONFIGURACIÓN IPv4
    // =================================================================================================
    { id: 'ipv4', label: 'Configuración IPv4', type: 'topic', color: '#3b82f6', width: 220, height: 50, children: ['v4_steps', 'v4_ex', 'v4_opt', 'v4_verif'], expanded: false, edgeLabel: 'Soporta' },

    // Pasos
    { id: 'v4_steps', label: 'Flujo Básico', type: 'subtopic', width: 140, height: 40, children: ['v4_st1', 'v4_st2'], parent: 'ipv4' },
    { id: 'v4_st1', label: '1. Habilitar Instancia', type: 'info', width: 160, height: 34, children: ['v4_c_rtr'], parent: 'v4_steps' },
    { id: 'v4_c_rtr', label: 'router eigrp [ASN]', type: 'code', width: 180, height: 30, parent: 'v4_st1' },
    { id: 'v4_st2', label: '2. Publicar Redes', type: 'info', width: 160, height: 34, children: ['v4_c_net'], parent: 'v4_steps' },
    { id: 'v4_c_net', label: 'network [IP] [wildcard]', type: 'code', width: 200, height: 30, parent: 'v4_st2' },

    // Ejemplos Completos
    { id: 'v4_ex', label: 'Ejemplo Topología (ASN 10)', type: 'subtopic', width: 220, height: 40, children: ['v4_ex1', 'v4_ex2', 'v4_ex3'], parent: 'ipv4' },
    { id: 'v4_ex1', label: 'R1 (Borde)', type: 'info', width: 100, height: 34, children: ['v4_code1'], parent: 'v4_ex' },
    { id: 'v4_code1', label: 'router eigrp 10\nnetwork 172.10.0.0 0.0.255.255\nnetwork 192.168.1.0 0.0.0.255\nnetwork 192.168.2.0 0.0.0.255', type: 'code', width: 260, height: 80, parent: 'v4_ex1' },

    { id: 'v4_ex2', label: 'R2 (Central)', type: 'info', width: 100, height: 34, children: ['v4_code2'], parent: 'v4_ex' },
    { id: 'v4_code2', label: 'router eigrp 10\nnetwork 172.20.0.0 0.0.255.255\nnetwork 192.168.1.0 0.0.0.255\nnetwork 192.168.3.0 0.0.0.255', type: 'code', width: 260, height: 80, parent: 'v4_ex2' },

    { id: 'v4_ex3', label: 'R3 (Branch)', type: 'info', width: 100, height: 34, children: ['v4_code3'], parent: 'v4_ex' },
    { id: 'v4_code3', label: 'router eigrp 10\nnetwork 172.30.0.0 0.0.255.255\nnetwork 192.168.2.0 0.0.0.255\nnetwork 192.168.3.0 0.0.0.255', type: 'code', width: 260, height: 80, parent: 'v4_ex3' },

    // Opciones Avanzadas
    { id: 'v4_opt', label: 'Opciones Avanzadas', type: 'subtopic', width: 180, height: 40, children: ['v4_pass', 'v4_rid', 'v4_var', 'v4_max', 'v4_auto'], parent: 'ipv4' },
    { id: 'v4_pass', label: 'Passive Interface', type: 'info', width: 160, height: 34, children: ['v4_c_pass'], parent: 'v4_opt' },
    { id: 'v4_c_pass', label: 'passive-interface Gi0/0', type: 'code', width: 220, height: 30, parent: 'v4_pass' },
    { id: 'v4_rid', label: 'Router ID Manual', type: 'info', width: 160, height: 34, children: ['v4_c_rid'], parent: 'v4_opt' },
    { id: 'v4_c_rid', label: 'eigrp router-id 1.1.1.1', type: 'code', width: 220, height: 30, parent: 'v4_rid' },
    { id: 'v4_var', label: 'Variance (Balanceo desigual)', type: 'info', width: 220, height: 34, children: ['v4_c_var'], parent: 'v4_opt' },
    { id: 'v4_c_var', label: 'variance 2', type: 'code', width: 120, height: 30, parent: 'v4_var' },
    { id: 'v4_max', label: 'Max Paths (1-32)', type: 'info', width: 160, height: 34, children: ['v4_c_max'], parent: 'v4_opt' },
    { id: 'v4_c_max', label: 'maximum-paths 4', type: 'code', width: 160, height: 30, parent: 'v4_max' },
    { id: 'v4_auto', label: 'Auto Summary', type: 'info', width: 160, height: 34, children: ['v4_c_auto'], parent: 'v4_opt' },
    { id: 'v4_c_auto', label: 'auto-summary / no auto-summary', type: 'code', width: 260, height: 30, parent: 'v4_auto' },

    // Verificación
    { id: 'v4_verif', label: 'Verificación', type: 'subtopic', width: 140, height: 40, children: ['v4_vf1', 'v4_vf2', 'v4_vf3'], parent: 'ipv4' },
    { id: 'v4_vf1', label: 'show ip eigrp neighbors', type: 'code', width: 220, height: 30, parent: 'v4_verif' },
    { id: 'v4_vf2', label: 'show ip eigrp topology', type: 'code', width: 220, height: 30, parent: 'v4_verif' },
    { id: 'v4_vf3', label: 'show ip route eigrp', type: 'code', width: 200, height: 30, parent: 'v4_verif' },


    // =================================================================================================
    // 3. CONFIGURACIÓN IPv6
    // =================================================================================================
    { id: 'ipv6', label: 'Configuración IPv6', type: 'topic', color: '#f59e0b', width: 220, height: 50, children: ['v6_diff', 'v6_ex', 'v6_link', 'v6_verif'], expanded: false, edgeLabel: 'Soporta' },

    // Diferencias
    { id: 'v6_diff', label: 'Diferencias Clave', type: 'subtopic', width: 160, height: 40, children: ['v6_d1', 'v6_d2', 'v6_d3'], parent: 'ipv6' },
    { id: 'v6_d1', label: 'NO se usa comando network', type: 'info', width: 220, height: 34, parent: 'v6_diff' },
    { id: 'v6_d2', label: 'Se habilita POR INTERFAZ', type: 'info', width: 220, height: 34, parent: 'v6_diff' },
    { id: 'v6_d3', label: 'Requiere "no shutdown"', type: 'info', width: 220, height: 34, parent: 'v6_diff' },

    // Ejemplo
    { id: 'v6_ex', label: 'Ejemplo de Configuración', type: 'subtopic', width: 200, height: 40, children: ['v6_ex_g', 'v6_ex_i'], parent: 'ipv6' },
    { id: 'v6_ex_g', label: 'Paso 1: Global', type: 'info', width: 120, height: 34, children: ['v6_c_glob'], parent: 'v6_ex' },
    { id: 'v6_c_glob', label: 'ipv6 router eigrp 10\neigrp router-id 1.1.1.1\nno shutdown', type: 'code', width: 220, height: 60, parent: 'v6_ex_g' },
    { id: 'v6_ex_i', label: 'Paso 2: Interfaz', type: 'info', width: 120, height: 34, children: ['v6_c_int'], parent: 'v6_ex' },
    { id: 'v6_c_int', label: 'interface s0/0/0\nipv6 eigrp 10', type: 'code', width: 160, height: 50, parent: 'v6_ex_i' },

    // Link Local
    { id: 'v6_link', label: 'Importancia Link-Local', type: 'subtopic', width: 200, height: 40, children: ['v6_l1', 'v6_l2'], parent: 'ipv6' },
    { id: 'v6_l1', label: 'Usa fe80:: para adyacencias', type: 'info', width: 220, height: 34, parent: 'v6_link' },
    { id: 'v6_l2', label: 'Next-Hop routing es Link-Local', type: 'info', width: 240, height: 34, parent: 'v6_link' },

    // Verificación
    { id: 'v6_verif', label: 'Verificación IPv6', type: 'subtopic', width: 160, height: 40, children: ['v6_vf1', 'v6_vf2'], parent: 'ipv6' },
    { id: 'v6_vf1', label: 'show ipv6 eigrp neighbors', type: 'code', width: 240, height: 30, parent: 'v6_verif' },
    { id: 'v6_vf2', label: 'show ipv6 route eigrp', type: 'code', width: 220, height: 30, parent: 'v6_verif' },


    // =================================================================================================
    // 4. COMPARATIVA Y MÉTRICAS
    // =================================================================================================
    { id: 'comp', label: 'Comparativa y Métricas', type: 'topic', color: '#ec4899', width: 220, height: 50, children: ['comp_table', 'comp_metric', 'comp_da'], expanded: false, edgeLabel: 'Analiza' },

    // Tabla Comparativa (Simulada como lista)
    { id: 'comp_table', label: 'Comparación V4 vs V6', type: 'subtopic', width: 180, height: 40, children: ['ct_1', 'ct_2', 'ct_3'], parent: 'comp' },
    { id: 'ct_1', label: 'Instancia', type: 'info', width: 120, height: 34, children: ['ct_1a', 'ct_1b'], parent: 'comp_table' },
    { id: 'ct_1a', label: 'v4: router eigrp', type: 'code', width: 160, height: 30, parent: 'ct_1' },
    { id: 'ct_1b', label: 'v6: ipv6 router eigrp', type: 'code', width: 180, height: 30, parent: 'ct_1' },
    { id: 'ct_2', label: 'Activación', type: 'info', width: 120, height: 34, children: ['ct_2a', 'ct_2b'], parent: 'comp_table' },
    { id: 'ct_2a', label: 'v4: Comando network', type: 'info', width: 180, height: 30, parent: 'ct_2' },
    { id: 'ct_2b', label: 'v6: Per-Interface', type: 'info', width: 180, height: 30, parent: 'ct_2' },
    { id: 'ct_3', label: 'Subredes', type: 'info', width: 120, height: 34, children: ['ct_3a', 'ct_3b'], parent: 'comp_table' },
    { id: 'ct_3a', label: 'v4: Match estricto', type: 'info', width: 160, height: 30, parent: 'ct_3' },
    { id: 'ct_3b', label: 'v6: No requerido', type: 'info', width: 160, height: 30, parent: 'ct_3' },

    // Métrica
    { id: 'comp_metric', label: 'Cálculo de Métrica', type: 'subtopic', width: 180, height: 40, children: ['cm_form', 'cm_k'], parent: 'comp' },
    { id: 'cm_form', label: 'Fórmula Compuesta', type: 'info', width: 160, height: 34, children: ['cm_code'], parent: 'comp_metric' },
    { id: 'cm_code', label: '[(10⁷/MinBW) + (SumDelay/10)] * 256', type: 'code', width: 280, height: 30, parent: 'cm_form' },
    { id: 'cm_k', label: 'K-Values (Defecto)', type: 'info', width: 160, height: 34, children: ['cm_k1', 'cm_k3', 'cm_others'], parent: 'comp_metric' },
    { id: 'cm_k1', label: 'K1 (Bandwidth) = 1', type: 'info', width: 160, height: 30, parent: 'cm_k' },
    { id: 'cm_k3', label: 'K3 (Delay) = 1', type: 'info', width: 160, height: 30, parent: 'cm_k' },
    { id: 'cm_others', label: 'K2, K4, K5 = 0', type: 'info', width: 160, height: 30, parent: 'cm_k' },

    // Distancia Admin
    { id: 'comp_da', label: 'Distancia Administrativa', type: 'subtopic', width: 180, height: 40, children: ['da_list'], parent: 'comp' },
    { id: 'da_list', label: 'Valores de Confianza', type: 'info', width: 160, height: 34, children: ['da_90', 'da_170', 'da_5', 'da_ospf'], parent: 'comp_da' },
    { id: 'da_90', label: '90: EIGRP Interno', type: 'info', width: 160, height: 30, parent: 'da_list' },
    { id: 'da_170', label: '170: EIGRP Externo', type: 'info', width: 160, height: 30, parent: 'da_list' },
    { id: 'da_5', label: '5: Sumarización EIGRP', type: 'info', width: 160, height: 30, parent: 'da_list' },
    { id: 'da_ospf', label: '(vs OSPF: 110, RIP: 120)', type: 'info', width: 180, height: 30, parent: 'da_list' }
];


/* ================================================================
   VISUAL STATE
================================================================ */
const SVG_NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('map-svg');

let viewport = { x: 0, y: 0, k: 0.8 }; // Start zoomed out
let isDragging = false;
let startDrag = { x: 0, y: 0 };

const gContent = document.createElementNS(SVG_NS, 'g');
svg.innerHTML = '';
svg.appendChild(gContent);

// Defs (Grid, etc)
const defs = document.createElementNS(SVG_NS, 'defs');
const pat = document.createElementNS(SVG_NS, 'pattern');
pat.setAttribute('id', 'g');
pat.setAttribute('width', '50');
pat.setAttribute('height', '50');
pat.setAttribute('patternUnits', 'userSpaceOnUse');
const pl = document.createElementNS(SVG_NS, 'path');
pl.setAttribute('d', 'M 50 0 L 0 0 0 50');
pl.setAttribute('fill', 'none');
pl.setAttribute('stroke', 'rgba(255,255,255,.03)');
pl.setAttribute('stroke-width', '1');
pat.appendChild(pl);
defs.appendChild(pat);
svg.insertBefore(defs, gContent);

const bgRect = document.createElementNS(SVG_NS, 'rect');
bgRect.setAttribute('width', '100000%');
bgRect.setAttribute('height', '100000%');
bgRect.setAttribute('x', '-50000%');
bgRect.setAttribute('y', '-50000%');
bgRect.setAttribute('fill', 'url(#g)');
gContent.appendChild(bgRect);


/* ================================================================
   LAYOUT LOGIC (STACKED TREE WITH 2 COLUMNS) - FIXED
================================================================ */

function calculateLayout() {
    const pos = {};

    const subtreeSizes = {};

    function calcSize(nodeId) {
        const node = NODES.find(n => n.id === nodeId);
        if (!node.expanded || !node.children || node.children.length === 0) {
            subtreeSizes[nodeId] = { w: node.width, h: node.height };
            return subtreeSizes[nodeId];
        }

        const childNodes = node.children.map(cid => NODES.find(n => n.id === cid));
        // Heuristic: mixed content or info/code?
        // If parent is 'subtopic' and children are 'info'/'code', usually we want compact layout.
        // User requested "split in 2".
        const isContentNode = childNodes.every(n => n.type === 'info' || n.type === 'code' || n.type === 'list');

        // Force grid if children are simple and > 1, or just 1 simple child
        // Actually if just 1 child, grid vs horizontal doesn't matter much vertical space wise,
        // but consistent logic helps.
        node.layoutMode = isContentNode ? 'grid' : 'horizontal';

        if (node.layoutMode === 'grid') {
            // 2 Columns Layout

            let col1W = 0, col2W = 0;
            let col1H = 0, col2H = 0;

            childNodes.forEach((c, i) => {
                const s = calcSize(c.id); // Recursive size
                if (i % 2 === 0) { // Left
                    col1W = Math.max(col1W, s.w);
                    col1H += s.h + 20; // 20px vertical gap
                } else { // Right
                    col2W = Math.max(col2W, s.w);
                    col2H += s.h + 20;
                }
            });

            // Total Width
            const totalW = (childNodes.length > 1) ? (col1W + 40 + col2W) : col1W;

            // Total Height: Max Column Height + Vertical Gap from Parent (80)
            // If children exist, the box is taller.
            // Height = 80 + Max(Col1H, Col2H)
            // Note: ColH already includes child heights + gaps.
            // But remember the LAST child didn't need a gap after it?
            // My loop adds 20 after each child. So remove 20 if > 0.
            if (col1H > 0) col1H -= 20;
            if (col2H > 0) col2H -= 20;

            const maxColH = Math.max(col1H, col2H);
            const totalH = 80 + maxColH;

            subtreeSizes[nodeId] = { w: Math.max(node.width, totalW), h: totalH };

            // Store column data for placement
            node.gridMetrics = { col1W, col2W, totalW };

        } else {
            // Horizontal Layout (Standard Tree)
            let totalW = 0;
            let maxH = 0;
            childNodes.forEach(c => {
                const s = calcSize(c.id);
                totalW += s.w;
                maxH = Math.max(maxH, s.h);
            });
            totalW += (childNodes.length - 1) * 40; // 40px horizontal gap

            // For Horizontal layout, height contribution to parent?
            // Parent is above children by 100px.
            // So subtree height = 100 + maxH.
            subtreeSizes[nodeId] = { w: Math.max(node.width, totalW), h: 100 + maxH };
        }

        return subtreeSizes[nodeId];
    }

    calcSize('center');

    // 2. Place Nodes (Pre-Order)
    function placeNode(nodeId, x, y) {
        const node = NODES.find(n => n.id === nodeId);
        pos[nodeId] = { x, y, w: node.width, h: node.height };

        if (!node.expanded || !node.children || node.children.length === 0) return;

        if (node.layoutMode === 'grid') {
            const { col1W, col2W, totalW } = node.gridMetrics;
            const kids = node.children;

            let startY = y + 80;
            let leftX, rightX;

            if (kids.length > 1) {
                const groupW = col1W + 40 + col2W;
                const leftEdge = x - groupW / 2;
                leftX = leftEdge + col1W / 2;
                rightX = leftEdge + col1W + 40 + col2W / 2;
            } else {
                leftX = x; // Single column centered
            }

            // Track Y for each column
            let yL = startY;
            let yR = startY;

            kids.forEach((cid, i) => {
                if (i % 2 === 0) {
                    // Left Column: place child at yL
                    placeNode(cid, leftX, yL);
                    const s = subtreeSizes[cid];
                    // Move yL down by child's subtree height + gap
                    yL += s.h + 20;
                } else {
                    // Right Column
                    placeNode(cid, rightX, yR);
                    const s = subtreeSizes[cid];
                    yR += s.h + 20;
                }
            });

        } else {
            // Horizontal Layout
            let childrenTotalW = subtreeSizes[nodeId].w;
            // Recalculate pure children width
            let cw = 0;
            node.children.forEach(cid => cw += subtreeSizes[cid].w);
            cw += (node.children.length - 1) * 40;

            let curX = x - cw / 2;

            node.children.forEach(cid => {
                const sw = subtreeSizes[cid].w;
                placeNode(cid, curX + sw / 2, y + 100);
                curX += sw + 40;
            });
        }
    }

    placeNode('center', 0, 0);
    return pos;
}

function el(tag, attrs = {}) {
    const e = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    return e;
}

function render() {
    while (gContent.childNodes.length > 1) gContent.removeChild(gContent.lastChild);
    const pos = calculateLayout();
    const lg = el('g');

    NODES.forEach(n => {
        if (n.expanded && n.children) {
            n.children.forEach(cid => {
                const p1 = pos[n.id];
                const p2 = pos[cid];
                if (!p1 || !p2) return;

                // Draw Logic
                let pathD = '';
                const stroke = (n.type === 'root' || n.type === 'topic') ? n.color : '#444';

                if (n.layoutMode === 'grid') {
                    // Direct line to child top
                    pathD = `M ${p1.x} ${p1.y + p1.h / 2} L ${p2.x} ${p2.y - p2.h / 2}`;
                } else {
                    // Orthogonal
                    const yMid = (p1.y + p1.h / 2 + p2.y - p2.h / 2) / 2;
                    pathD = `M ${p1.x} ${p1.y + p1.h / 2} L ${p1.x} ${yMid} L ${p2.x} ${yMid} L ${p2.x} ${p2.y - p2.h / 2}`;
                }

                lg.append(el('path', { d: pathD, fill: 'none', stroke: stroke, strokeWidth: 1.5, opacity: 0.5 }));

                const childNode = NODES.find(x => x.id === cid);
                if (childNode && childNode.edgeLabel) {
                    // Label pos logic
                    // ...
                }
            });
        }
    });
    gContent.append(lg);

    Object.keys(pos).forEach(id => {
        const n = NODES.find(x => x.id === id);
        const p = pos[id];
        const g = el('g', { class: 'node-wrap', transform: `translate(${p.x},${p.y})` });
        g.onclick = e => handleNodeClick(e, n);

        let fill = '#080c14', stroke = n.color || '#444', strokeW = 2, rx = 8, textColor = n.color || '#ddd', fontSize = 12;
        let font = 'Exo 2';

        if (n.type === 'code') {
            fill = '#161b22'; stroke = '#30363d'; strokeW = 1; rx = 4; font = 'JetBrains Mono'; fontSize = 11; textColor = '#a5d6ff';
        } else if (n.type === 'info') {
            stroke = '#333'; strokeW = 1; textColor = '#bbb'; fontSize = 11;
        }

        g.append(el('rect', { class: 'bg', x: -p.w / 2, y: -p.h / 2, width: p.w, height: p.h, rx: rx, ry: rx, fill: fill, stroke: stroke, 'stroke-width': strokeW }));

        const lines = n.label.split('\n');
        const lh = 14;
        const startY = -((lines.length - 1) * lh) / 2;
        lines.forEach((line, i) => {
            let fontWeight = (n.type === 'topic' || n.type === 'root') ? '700' : '400';
            let align = 'middle';
            let x = 0;
            if (n.type === 'code') { align = 'middle'; } // Code centered? or left. Middle is safer for tree.

            const t = el('text', { x: x, y: startY + i * lh, 'text-anchor': align, 'dominant-baseline': 'middle', fill: textColor, style: `font-family:${font}; font-size:${fontSize}px; font-weight:${fontWeight}` });
            t.textContent = line;
            g.append(t);
        });

        if (n.children && n.children.length > 0) {
            const indColor = n.expanded ? (n.color || '#777') : '#777';
            g.append(el('circle', { cx: 0, cy: p.h / 2 + 6, r: 3, fill: n.expanded ? indColor : 'none', stroke: indColor, opacity: 0.7 }));
        }

        gContent.append(g);
    });
    updateTransform();
}

// ... (Input Handlers kept same)
function drawEdgeLabel(parentG, x, y, text) { /* ... */ }
function handleNodeClick(e, n) { e.stopPropagation(); if (n.children && n.children.length > 0) { n.expanded = !n.expanded; render(); } }
function updateTransform() { gContent.setAttribute('transform', `translate(${viewport.x + window.innerWidth / 2},${viewport.y + 100}) scale(${viewport.k})`); }

window.addEventListener('contextmenu', e => e.preventDefault());
svg.addEventListener('mousedown', e => { if (e.button === 2) { isDragging = true; startDrag = { x: e.clientX, y: e.clientY }; svg.style.cursor = 'grabbing'; } });
window.addEventListener('mousemove', e => { if (isDragging) { const dx = e.clientX - startDrag.x; const dy = e.clientY - startDrag.y; viewport.x += dx; viewport.y += dy; startDrag = { x: e.clientX, y: e.clientY }; updateTransform(); } });
window.addEventListener('mouseup', () => { isDragging = false; svg.style.cursor = 'default'; });
svg.addEventListener('wheel', e => { e.preventDefault(); const s = Math.sign(e.deltaY) * -0.1; viewport.k = Math.max(0.1, Math.min(4, viewport.k + s)); updateTransform(); });
window.addEventListener('resize', render);

render();
